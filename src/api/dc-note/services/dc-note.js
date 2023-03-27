'use strict';

/**
 * dc-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dc-note.dc-note');
