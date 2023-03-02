'use strict';

/**
 * `userAppPolicy` policy
 */

module.exports = (policyContext, config, { strapi }) => {
  // Add your own logic here.
  if (!policyContext.state.user) {
      return false
  }
  
  const filters ={
    access: {
      users_permissions_user: {
        id: {
          '$eq': policyContext.state.user.id
        }
      }
    }
  }
  policyContext.request.query.filters = filters
  return true;
}
