'use strict';

/**
 * `currentApp` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
    // Add your own logic here.
    const url = new URL(policyContext.request.header.origin)
    // get subdomain
    const subdomains = url.hostname.split('.')
    if (subdomains.length < 3) return false

    const appCode = subdomains[0]
    const user = policyContext.state.user

    if (!user) return false
    const access = await strapi.db.query('api::access.access').findOne({
      where: {
        user : {
          id: user.id
        },
        app: {
          code: appCode
        }
      },
      populate: ['app']
    })
    policyContext.state.app = access.app

    let filters = policyContext.request.query.filters || {}
    filters.app = {
      code: {
        '$eq': appCode
      }
    }
    policyContext.request.query.filters = filters
    return true;
};
