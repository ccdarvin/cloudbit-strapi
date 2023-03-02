'use strict';

/**
 * dc-doctor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dc-doctor.dc-doctor');
