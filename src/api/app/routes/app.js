'use strict';

/**
 * app router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::app.app', {
  config: {
    find: {
      policies: ['app-user'],
    },
    findOne: {
      policies: ['app-user'],
    }
  }
});
