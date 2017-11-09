module.exports = Object.assign(require('./config.json'), require('config').get('apps.api.config', {}));
