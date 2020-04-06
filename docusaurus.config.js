module.exports = {
  title: 'SWE5 Notes',
  tagline: 'A collection of notes',
  url: 'https://whitehat-swe.github.io',
  baseUrl: '/swe5-notes',
  favicon: 'img/favicon.ico',
  organizationName: 'whitehat-swe', // Usually your GitHub org/user name.
  projectName: 'swe5-notes', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SWE5 Notes',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/javascript/arrow-functions',
          activeBasePath: 'docs',
          label: 'Notes',
          position: 'left',
        },
        {
          href: 'https://github.com/whitehat-swe/swe5-notes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Notes',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
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
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/whitehat-swe/swe5-notes',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WhiteHat. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
