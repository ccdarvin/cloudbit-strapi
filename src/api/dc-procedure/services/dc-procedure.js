'use strict';

/**
 * dc-procedure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dc-procedure.dc-procedure');
