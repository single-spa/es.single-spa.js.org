const path = require('path');
const repoUrl = 'https://github.com/single-spa/single-spa.js.org';
const libRepoUrl = 'https://github.com/single-spa/single-spa';

const versions = require('./versions.json');

module.exports = {
  title: 'single-spa',
  tagline: 'Un router de JavaScript para microservicios front-end',
  url: 'https://single-spa.github.io/es.single-spa.js.org',
  baseUrl: '/',
  projectName: 'single-spa',
  favicon: 'img/logo-blue-favicon.ico',
  organizationName: 'single-spa',
  customFields: {
    repoUrl,
    libRepoUrl,
    // replace this with own!
    githubTokenAccess: '57317aeaa31d4221296b9252c61b355bb2a98f6c',
  },
  scripts: [
    'https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js',
    'https://cdn.jsdelivr.net/npm/racial-equity-banner@1.0.3/racial-equity-banner-bottom.js',
    '/js/index.js',
  ],
  themeConfig: {
    algolia: {
      apiKey: '113e711177d63ab1ff28ef858cbcffa5',
      indexName: 'single_spa',
      algoliaOptions: {},
    },
    footer: {
      logo: {
        alt: 'single-spa',
        src: 'img/logo-white-bgblue.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} single-spa.`,
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'FAQ',
              to: 'docs/faq/',
            },
            {
              label: 'Empezando con single-spa',
              to: 'docs/getting-started-overview/',
            },
            {
              label: 'API de Referencia',
              to: 'docs/api/',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Exhibición de usuarios',
              to: 'users/',
            },
            {
              label: 'Contribuciones',
              to: 'contributors/',
            },
            {
              label: 'Chatea en Slack',
              href:
                'https://join.slack.com/t/single-spa/shared_invite/zt-mafdeybq-0v1aIm3KKaqyVCT2xeny3Q',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Single_spa/',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: libRepoUrl,
            },
            {
              label: 'Donar',
              href: 'https://opencollective.com/single-spa',
            },
            {
              label: 'Blog',
              to: 'blog/',
            },
          ],
        },
      ],
    },
    image: 'img/docusaurus.png',
    navbar: {
      title: 'single-spa',
      logo: {
        alt: 'single-spa Logo',
        src: 'img/logo-white-bgblue.svg',
      },
      items: [
        {
          to: 'versions',
          label: versions[0],
          style: {
            whiteSpace: 'nowrap',
            padding: '0.25rem 0.5rem 0.2rem 0.25rem',
            fontSize: 'calc(0.9 * var(--ifm-font-size-base))',
            textDecoration: 'underline',
          },
        },
        { to: 'docs/faq/', label: 'FAQ' },
        { to: 'docs/', label: 'Documentación' },
        { to: 'help/', label: 'Ayuda' },
        { to: 'blog/', label: 'Blog' },
        { href: 'https://opencollective.com/single-spa', label: 'Donar' },
        { href: 'https://github.com/single-spa/single-spa', label: 'GitHub' },
<<<<<<< HEAD
        { to: 'languages', label: '简Жहि Idiomas'},
=======
        { to: 'languages', label: '简Жहि Languages' },
>>>>>>> be078b0c91c6f36025e026f974dd5b88e003ab2a
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-138683004-1',
    },
    prismTheme: require('prism-react-renderer/themes/vsDark'),
  },
  plugins: [
    [
      path.resolve(__dirname, './src/plugins/docusaurus-plugin-redirects'),
      {
        excludedPaths: ['/'],
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl: `${repoUrl}/blob/master/website/`,
          // sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],
};
