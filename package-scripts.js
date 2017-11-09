const config = require('config')

const localeList = config.get('global.locales') || { en: 'English' }
const locales = Object.keys(localeList)

const localeConf = lang =>
  [`--locale=${lang}`, `--i18n-file=locales/messages.${lang}.xlf`, `--i18n-format=xlf`].join(' ')

const prodOptions = (app, lang) => [`--prod`, `--base-href='${lang}'`, `--output-path=dist/${lang}/${app}`].join(' ')

const appConfig = (env, app, lang) =>
  [
    `--app=${app}`,
    `--aot`,
    localeConf(lang),
    env === 'prod' ? prodOptions(app, lang) : '',
    app === 'server' ? ' --output-hashing=false ' : ''
  ].join(' ')

const getBuildCmd = (app, lang) => `ng build ${appConfig('prod', app, lang)} `

const getServeCmd = (lang, port) => `ng serve ${appConfig('dev', 'web', lang)} --port ${port}`





// Create Dev Command
let port = 4200

const web = {
  default: 'nps dev.web.en'
}

locales.forEach(lang => {
  web[lang] = getServeCmd(lang, port)
  port++
})


// Create build command
const build = {}

// Add all the language build commands to the default build
build['default'] = locales.map(l => `nps build.${l}`).join(' && ')

// Build out a map of each app inside the languages
const buildApps = ['web', 'server']

// Loop over the locales
locales.forEach(lang => {
  // Create a new object for this lang
  build[lang] = {}
  // Add a build command for each of the build apps
  buildApps.forEach(app => build[lang][app] = getBuildCmd(app, lang))
  // Add all build commands to the default build for this language
  build[lang]['default'] = buildApps.map(app => `nps build.${lang}.${app}`).join(' && ')
})




const scripts = {
  scripts: {
    ng: 'ng',
    dev: {
      default: 'concurrently --kill-others "nps dev.api" "nps dev.web"',
      api: 'nodemon apps/api/server/server.ts',
      web,
    },
    build,
    // postbuild: {
    //   server: 'webpack --config webpack.server.config.js --progress --colors'
    // },
    docker: {
      build: 'docker build -t beeman/angular-nx-ssr:latest .',
      run: 'docker run -it -p 4000:4000 --name angular-nx-ssr --rm beeman/angular-nx-ssr:latest'
    },
    now: {
      deploy: 'now --docker',
      alias: 'now alias',
      default: 'nps now:deploy && nps now:alias'
    },
    format: 'prettier --single-quote --print-width 120 --write "{apps,config,libs}/**/*.{ts,js,json}"',
    'format:root': 'prettier --single-quote --print-width 120 --write "./*.{ts,js,json}"'
  }
}

// console.log(JSON.stringify(scripts, null, 2))

module.exports = scripts
