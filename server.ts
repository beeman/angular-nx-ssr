// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

// import { renderModuleFactory } from '@angular/platform-server';
import { ngExpressEngine } from '@nguniversal/express-engine';

// import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';

// enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;

const DIST_FOLDER = join(process.cwd(), 'dist', 'apps');

const webFolder = (file = '') => join(DIST_FOLDER, 'web', file)

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/apps/server/main.bundle');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', webFolder());

// Server static files from /browser
app.get('*.*', express.static(webFolder()));

// All regular routes use the Universal engine
app.get('*', (req = '', res) => {
  res.render(webFolder('index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
