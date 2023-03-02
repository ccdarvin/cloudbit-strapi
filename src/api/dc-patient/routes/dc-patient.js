'use strict';

/**
 * dc-patient router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dc-patient.dc-patient', {
    config: {
        create: {
            policies: ['global::currentAppPost']
        },
        update: {
            policies: ['global::currentAppPut']
        },
        find: {
            policies: ['global::currentAppGet']
        },
        findOne: {
            policies: ['global::currentAppGet']
        },
    }
});
