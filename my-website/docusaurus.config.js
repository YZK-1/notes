// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YZK Notes',
  tagline: '学习笔记',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://yzk-1.github.io',  // Fixed the URL format
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/notes/',

  // GitHub pages deployment config.
  organizationName: 'YZK-1',
  projectName: 'notes',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/YZK-1/notes/edit/main/my-website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/YZK-1/notes/edit/main/my-website/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
          respectPrefersColorScheme: true,
        },
        navbar: {
          title: 'YZK Notes',
          logo: {
            alt: 'Notes Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: '笔记',
            },
            {to: '/blog', label: '博客', position: 'left'},
            {
              href: 'https://github.com/YZK-1/notes',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: '文档',
              items: [
                {
                  label: '开始',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: '社区',
              items: [
                {
                  label: 'GitHub Issues',
                  href: 'https://github.com/YZK-1/notes/issues',
                },
              ],
            },
            {
              title: '更多',
              items: [
                {
                  label: '博客',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/YZK-1/notes',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} YZK Notes. Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;
