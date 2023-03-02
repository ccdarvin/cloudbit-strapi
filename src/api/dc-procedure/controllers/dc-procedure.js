'use strict';

/**
 * dc-procedure controller
 */
const fs = require('fs')
const path = require('node:path')
const { parse } = require('csv')

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dc-procedure.dc-procedure', ({strapi}) => ({
    async loadData(ctx) {

        //read data from csv file
        const filePath = path.resolve(__dirname, '../data//dc-procedure.csv');
        fs.createReadStream(filePath, {
            encoding: 'utf-8',
            flag: 'r'
        }).pipe(parse({
            delimiter: ',',
            from_line: 2,
        })).on('data', async (row) => {
            const data = {
                'code': row[0],
                'name': row[1],
                'category': row[2],
                'app': ctx.state.app.id
            }
            //check if record exists
            const record = await strapi.db.query('api::dc-procedure.dc-procedure').findOne({
                where: {
                    code: row[0],
                    app: {
                        id: ctx.state.app.id
                    }
                }
            })


            // create new record
            if (!record) {
                await strapi.entityService.create('api::dc-procedure.dc-procedure', {
                    data: data
                })
            }
            // update existing record
            else {
                await strapi.entityService.update('api::dc-procedure.dc-procedure', record.id, {
                    data: data
                })
            }
        }).on('end', () => {
            ctx.send({
                'message': 'Data loaded successfully'
            });
        })
        return {
            'message': 'Data loaded successfully'
        }
    }
}));
