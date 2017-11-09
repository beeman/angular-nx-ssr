const path = require('path');
const config = require('config');


import { server as en } from '../../../../dist/en/server/server'
import { server as es } from '../../../../dist/es/server/server'


module.exports = function configMiddleware() {

  // The actual middleware
  return (req, res) => {
    // Get the language off the route
    const lang = req.params.lang || 'en';

    // Grab the options from the bundle config

    // We should now have all the info and things set up to render all the content from the right place
    console.log('Requested language', lang);
    console.log('req.url', req.url);

    en(req, res)
    return () => en(req, res)

    // import { server as en } from '../../../../dist/en/server/server'
    // import { server as es } from '../../../../dist/es/server/server'

    // console.log(en)
    // app.use('/en/*', en)
    // app.use('/es/', es)
    // // Define the html engine
    // return res.send({ bla: 'bla' });
  };
};
