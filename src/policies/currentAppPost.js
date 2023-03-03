'use strict';

/**
 * `currentApp` policy
 */

module.exports = async (policyContext, config, { strapi }) => {

  policyContext.request.body.data.app = policyContext.state.app.id
  return true;
};
