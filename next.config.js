const withPlugins = require('next-compose-plugins');
const withLess = require('next-with-less');
const { i18n } = require('./i18next.config.js');

const nextConfig = {
  // 원하는 Next 설정 추가
};

module.exports = withPlugins(
  [
    [
      withLess,
      {
        i18n,
        swcMinify: true,
        lessLoaderOptions: {
          /* ... */
          lessOptions: {
            /* ... */
            modifyVars: {
              'primary-color': '#9900FF',
              'border-radius-base': '2px',
              /* ... */
            },
          },
        },
      },
    ],
  ],
  { i18n },
);

// module.exports = {
//   i18n,
// };
// module.exports = withLess({
//   swcMinify: true,
//   lessLoaderOptions: {
//     /* ... */
//     lessOptions: {
//       /* ... */
//       modifyVars: {
//         'primary-color': '#9900FF',
//         'border-radius-base': '2px',
//         /* ... */
//       },
//     },
//   },
// });
