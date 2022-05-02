const path = require('path');
const repoUrl = 'https://github.com/single-spa/single-spa.js.org';
const libRepoUrl = 'https://github.com/single-spa/single-spa';

const versions = require('./versions.json');

module.exports = {
  title: 'single-spa',
<<<<<<< HEAD
  tagline: 'Un router de JavaScript para microservicios front-end',
  url: 'https://single-spa.github.io/es.single-spa.js.org',
=======
  tagline: 'A javascript router for front-end microservices',
  url: 'https://single-spa.js.org',
>>>>>>> e4f8dd91543d6e5d0c805c190b0381761f4fe220
  baseUrl: '/',
  projectName: 'single-spa',
  favicon: 'img/single-spa-mark-magenta.svg',
  organizationName: 'single-spa',
  customFields: {
    repoUrl,
    libRepoUrl,
    // replace this with own!
    githubTokenAccess: '57317aeaa31d4221296b9252c61b355bb2a98f6c',
  },
  scripts: [
    'https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js',
    'https://cdn.jsdelivr.net/npm/racial-equity-banner@1.0.4/racial-equity-banner-bottom.js',
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
        src: 'img/single-spa-logo-magenta.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} single-spa.`,
      style: 'dark',
      links: [
        {
<<<<<<< HEAD
          title: 'Documentación',
=======
          title: "Courses",
          items: [
            {
              label: "Single-Spa Workshop",
              to: "https://single-spa-workshop.com"
            },
            {
              label: "Microfrontend Fundamentals",
              to: "https://single-spa-workshop.com"
            },
          ]
        },
        {
          title: 'Docs',
>>>>>>> e4f8dd91543d6e5d0c805c190b0381761f4fe220
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
<<<<<<< HEAD
              label: 'Exhibición de usuarios',
=======
              label: 'Sponsors',
              to: 'sponsors/',
            },
            {
              label: 'User Showcase',
>>>>>>> e4f8dd91543d6e5d0c805c190b0381761f4fe220
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
        src: 'img/single-spa-mark-magenta.svg',
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
<<<<<<< HEAD
        { to: 'docs/', label: 'Documentación' },
        { to: 'help/', label: 'Ayuda' },
=======
        { to: 'docs/', label: 'Docs' },
        { to: 'https://single-spa-workshop.com', label: 'Courses' },
        { to: 'help/', label: 'Help' },
>>>>>>> e4f8dd91543d6e5d0c805c190b0381761f4fe220
        { to: 'blog/', label: 'Blog' },
        { href: 'https://opencollective.com/single-spa', label: 'Donar' },
        { href: 'https://github.com/single-spa/single-spa', label: 'GitHub' },
<<<<<<< HEAD
        { to: 'languages', label: '简Жहि Idiomas'},
=======
        { to: 'languages', label: '简Жहि Languages' },
>>>>>>> e4f8dd91543d6e5d0c805c190b0381761f4fe220
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
