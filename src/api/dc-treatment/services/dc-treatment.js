'use strict';

/**
 * dc-treatment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dc-treatment.dc-treatment');
