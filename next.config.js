// next.config.js
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const { i18n } = require('./next-i18next.config.js');

module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        modifyVars: { '@primary-color': '#9900FF' }, // optional
        lessVarsFilePath: './src/styles/variables.less', // optional
        lessVarsFilePathAppendToEndOfContent: false, // optional
        // optional https://github.com/webpack-contrib/css-loader#object
        cssLoaderOptions: {
          // ...
          mode: 'local',
          exportLocalsConvention: 'camelCase',
          exportOnlyLocals: false,
          // ...
          getLocalIdent: (context, localIdentName, localName, options) => {
            return 'whatever_random_class_name';
          },
        },

        // for Next.js ONLY
        nextjs: {
          localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
        },

        // Other Config Here...

        webpack: (config, { isServer }) => {
          if (!isServer) {
            config.resolve.fallback = {
              fs: false,
              process: false,
              path: false,
            };
          }

          return config;
        },
      },
    ],
  ],
  {
    i18n,
    swcMinify: true,
    experimental: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
  },
);
