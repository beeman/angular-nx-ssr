module.exports = Object.assign(require('./datasources.json'), require('config').get('apps.api.datasources', {}));
