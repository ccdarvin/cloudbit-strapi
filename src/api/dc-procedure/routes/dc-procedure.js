'use strict';

/**
 * dc-procedure router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dc-procedure.dc-procedure',{
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
