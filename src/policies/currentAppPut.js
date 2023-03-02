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
    const access = await strapi.entityService.findMany(
      'api::access.access',
      {
        filters: {
          app: {
            code: {
              '$eq': appCode
            }
          },
          users_permissions_user: {
            id: {
              '$eq': user.id
            }
          }
        }
      }
    )
    if (access.length === 0) return false
    return true;
};
