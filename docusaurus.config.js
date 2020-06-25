module.exports = {
  title: 'TETRIS-FAQ',
  tagline: 'Finally good info',
  url: 'https://docusaurus-2.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'winterNebs', // Usually your GitHub org/user name.
  projectName: 'TETRIS-FAQ', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'TETRIS-FAQ',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: '/',
          activeBasePath: '',
          label: 'Home',
          position: 'left',
        },
        {to: 'fbq', label: 'Wall of Shame', position: 'left'},
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
              to: '/',
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
              href: 'https://threewi.de',
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
          homePageId: 'intro',
          routeBasePath: '',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/winterNebs/TETRIS-FAQ/edit/master/website/',
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
