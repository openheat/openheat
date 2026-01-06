import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Open Heat',
  url: "https://www.openheat.org",
  baseUrl: "/",

  organizationName: "openheat",
  projectName: "openheat",

  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./config/sidebars.ts'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  favicon: 'img/favicon.png',
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'Opne Heat',
        src: 'img/logo.png',
      },
    },
  },
};

export default config;
