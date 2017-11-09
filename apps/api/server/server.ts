'use strict';

const loopback = require('loopback');
const path = require('path');
const boot = require('loopback-boot');

// const { angularSsr } = require('./middleware/angular-ssr')

const app = (module.exports = loopback());

// const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`../../../dist/apps/server/main.bundle`);

// const options = {
//   appRoot: (file = '') => path.join(process.cwd(), '..', '..', 'dist', 'apps', 'web', file),
//   appServerModule: AppServerModuleNgFactory,
//   moduleMap: LAZY_MODULE_MAP,
// }
//
// console.log(options.appRoot(''))
//
// angularSsr(app, options)

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});
