module.exports = {
  title: 'TETRIS-FAQ',
  tagline: 'Finally good info',
    url: 'https://winternebs.github.io/TETRIS-FAQ',
    baseUrl: '/TETRIS-FAQ/',
  favicon: 'img/favicon.ico',
  organizationName: 'winterNebs', // Usually your GitHub org/user name.
  projectName: 'TETRIS-FAQ', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'adee4080c95683ecf65a415c1d4889db',
      indexName: 'winternebs_tetris-faq',
    },
    navbar: {
      title: 'TETRIS-FAQ',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Home',
          position: 'left',
        },
        {
          href: 'https://github.com/winterNebs/TETRIS-FAQ',
          label: 'GitHub',
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
              label: 'TETRIS-FAQ',
              to: 'docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'fourwi.de',
              href: 'http://fourwi.de',
            },
            {
              label: 'threewi.de',
              href: 'http://threewi.de',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'four.lol',
              href: 'https://four.lol',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/winterNebs/TETRIS-FAQ',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} winterNebs`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/winterNebs/TETRIS-FAQ/edit/master/',
        },
        //blog: {
        //  showReadingTime: true,
        //  // Please change this to your repo.
        //  editUrl:
        //    'https://github.com/winterNebs/TETRIS-FAQ/edit/master/website/blog/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
