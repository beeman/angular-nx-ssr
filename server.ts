import 'zone.js/dist/zone-node'
import 'reflect-metadata'

import * as express from 'express'

const router = express.Router()

import { ngExpressEngine } from '@nguniversal/express-engine'
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader')

import { join } from 'path'

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./main.bundle`)

const appRoot = (file = '') => join(process.cwd(), 'dist', 'apps', 'web', file)


export const server = (req, res) => {
  const app = req.app

  app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }))

  app.set('view engine', 'html')

  app.set('views', appRoot())

  // Server static files from /browser
  router.get('*.*', express.static(appRoot()))

  // All regular routes use the Universal engine
  router.get('*', (req = '', res) => res.render(appRoot('index.html'), { req }))
}
