import * as express from 'express';
import { join } from 'path';
import { angularSsr } from './angular-ssr'

const app = express();
const PORT = process.env.PORT || 4000;

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist/apps/server/main.bundle`);

const options = {
  appRoot: (file = '') => join(process.cwd(), 'dist', 'apps', 'web', file),
  appServerModule: AppServerModuleNgFactory,
  moduleMap: LAZY_MODULE_MAP,
}

angularSsr(app, options)

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
