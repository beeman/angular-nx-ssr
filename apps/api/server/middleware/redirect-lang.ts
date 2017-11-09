const locale = require('locale');
const config = require('config');

module.exports = () => {
  // Get the configured locales, default to English
  const configLocales = Object.keys(config.global.locales) || ['en'];

  // Fetch the supported locales from the lib
  const supported = new locale.Locales(configLocales);

  // The actual middleware
  return (req, res) => {
    // Get the Browser Locales
    const browserLocales = new locale.Locales(req.headers['accept-language']);

    // Select the preferred one
    const preferredLocale = browserLocales.best(supported);

    // Select the locale based on if we support the preferred one
    const selectedLocale = configLocales.includes(preferredLocale.code) ? preferredLocale.code : 'en';

    // Redirect to the selected locale
    console.log(`Redirecting to selectedLocale ${selectedLocale}`);
    return res.redirect(`/${selectedLocale}/`);
  };
};
