const path = require('path');

// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localePath: path.resolve('./public/locales'),
    debug: true,
    react: {
      useSuspense: false,
      wait: true,
    },
  },
};
