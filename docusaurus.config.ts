import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Goyyds',
  tagline: 'Welcome You !  Have a good day !',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://goyyds.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'goyyds', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-cn',
    locales: [
      'en',
      // 'ja',
      // 'es-ES',
      // 'fr',
      // 'pt-BR',
      // 'ro',
      // 'ru',
      // 'uk',
      'zh-cn',
    ],
    localeConfigs: {
      en: {
        label: 'English',
      },
      // ja: {
      //   label: '日本語',
      // },
      // 'es-ES': {
      //   label: 'Español',
      // },
      // fr: {
      //   label: 'Français',
      // },
      // 'pt-BR': {
      //   label: 'Português (Brasil)',
      // },
      // ro: {
      //   label: 'Română',
      // },
      // ru: {
      //   label: 'Русский',
      // },
      // uk: {
      //   label: 'Українська',
      // },
      'zh-cn': {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          sortPosts: "ascending",
          // sortPosts: "descending",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Goyyds',
      logo: {
        alt: 'Logo',
        // src: 'img/logo.svg',
        src: 'img/mg.svg',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/goyyds/goyyds.github.io',
          label: 'GitHub',
          position: 'right',
        },
        {
          position: 'right',
          label: 'More',
          items:[
            {
              label:'Download',
              to: '/download'
            },{
              label:'B',
              to: '/blog2'
            },{
              label:'D',
              to: '/d/intro'
            }
          ]
        },

        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      apiKey: 'f68e781ce8edcc059495ae21bc8e1a4d',
      indexName: 'goyyds',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: '3VOE8BSPED',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    googleAdsense: {
      dataAdClient: "ca-pub-9848500077083072",
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-1LY690H7PW',
        anonymizeIP: true,
      },

    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'blog2',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'blog2',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './mg-blog',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'd',
        path: './mg-docs',
        routeBasePath: '/d',
        sidebarPath: './sidebars.ts',
        // ... other options

      },
    ],

  ],
};

export default config;
