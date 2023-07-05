/* eslint-disable no-undef */
const withPlugins = require("next-compose-plugins");
const withAwesomeNext = require("@sqb/awesome-nextjs");

module.exports = withPlugins(
  [
    [
      withAwesomeNext,
      {
        sentry: { enable: process.env.eruda === "yes" },
        less: { enable: false },
        sensors: { enable: false },
        arms: { enable: false },
      },
    ],
  ],
  {
    reactStrictMode: true,
    publicRuntimeConfig: {
      APP_API: process.env.APP_API,
      WOSAI_ENV: process.env.WOSAI_ENV,
    },
  }
);
