'use strict';

/**
 * app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app.app', ({ strapi,  }) => ({
    async create(data) {
        const result = await super.create(data)
        console.log('create', result)
        // create access
        return result;
    }
}));
