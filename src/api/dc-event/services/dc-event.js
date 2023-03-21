'use strict';

/**
 * dc-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dc-event.dc-event');
