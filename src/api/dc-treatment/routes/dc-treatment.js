'use strict';

/**
 * dc-treatment router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dc-treatment.dc-treatment', {
    config: {
        create: {
            policies: ['global::currentApp', 'global::currentAppPost']
        },
        update: {
            policies: ['global::currentApp']
        },
        find: {
            policies: ['global::currentApp']
        },
        findOne: {
            policies: ['global::currentApp']
        },
    }
});
