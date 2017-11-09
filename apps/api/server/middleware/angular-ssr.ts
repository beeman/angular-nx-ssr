import 'zone.js/dist/zone-node';
import 'reflect-metadata';

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
import { ngExpressEngine } from '@nguniversal/express-engine';

import * as express from 'express';

export interface angularSsrOptions {
  appRoot: Function;
  appServerModule: any;
  moduleMap: any;
}

export const angularSsr = (app, options: angularSsrOptions) => {
  app.engine(
    'html',
    ngExpressEngine({
      bootstrap: options.appServerModule,
      providers: [provideModuleMap(options.moduleMap)]
    })
  );

  app.set('view engine', 'html');
  app.set('views', options.appRoot());

  // Server static files from /browser
  app.get('*.*', express.static(options.appRoot()));

  // All regular routes use the Universal engine
  app.get('*', (req = '', res) => res.render(options.appRoot('index.html'), { req }));
};
