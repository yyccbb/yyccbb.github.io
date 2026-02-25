import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Remote Development Guide",
  description: "A guide for VS Code SFTP and Remote Debugging",
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
