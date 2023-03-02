'use strict';

/**
 * dc-patient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dc-patient.dc-patient');
