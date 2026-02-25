import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Remote Development Guide",
  description: "A guide for remote development on the NUS SoC Compute Cluster, focusing on SFTP and debugpy to manage thread and process limits.",
  base: '/',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://yyccbb.github.io'
  },
  head: [
    ['meta', { name: 'keywords', content: 'NUS, SoC Compute Cluster, thread limit, process limit, remote development, VS Code, SFTP, debugpy' }],
    ['meta', { name: 'author', content: 'Yu Chenbo' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Remote Development Guide - NUS SoC Compute Cluster' }],
    ['meta', { property: 'og:description', content: 'How to use VS Code SFTP and debugpy for remote debugging while respecting SoC Compute Cluster resource constraints.' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SFTP Setup', link: '/sftp' },
      { text: 'Debugpy', link: '/debugpy' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'SFTP Setup', link: '/sftp' },
          { text: 'Debugpy Remote Debugging', link: '/debugpy' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yyccbb/yyccbb.github.io' }
    ]
  }
})
