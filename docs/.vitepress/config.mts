import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "System Design Notes",
  description: "Notes based on System Design Interview - An Insider's Guide (Vol 1 & 2) by Alex Xu",
  ignoreDeadLinks: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'System Design Notes' }],
    ['meta', { name: 'og:description', content: "Notes based on System Design Interview - An Insider's Guide by Alex Xu" }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vol 1 (Ch 1–15)', link: '/chapters/01-scaling' },
      { text: 'Vol 2 (Ch 16–28)', link: '/chapters/16-proximity-service' },
    ],

    sidebar: [
      {
        text: '📖 Introduction',
        items: [
          { text: 'About These Notes', link: '/intro' },
        ]
      },
      {
        text: '📘 Volume 1',
        collapsed: false,
        items: [
          { text: 'Ch 1 · Scale from Zero to Millions', link: '/chapters/01-scaling' },
          { text: 'Ch 2 · Back-of-the-Envelope Estimation', link: '/chapters/02-estimation' },
          { text: 'Ch 3 · System Design Framework', link: '/chapters/03-framework' },
          { text: 'Ch 4 · Rate Limiter', link: '/chapters/04-rate-limiter' },
          { text: 'Ch 5 · Consistent Hashing', link: '/chapters/05-consistent-hashing' },
          { text: 'Ch 6 · Key-Value Store', link: '/chapters/06-key-value-store' },
          { text: 'Ch 7 · Unique ID Generator', link: '/chapters/07-unique-id-generator' },
          { text: 'Ch 8 · URL Shortener', link: '/chapters/08-url-shortener' },
          { text: 'Ch 9 · Web Crawler', link: '/chapters/09-web-crawler' },
          { text: 'Ch 10 · Notification System', link: '/chapters/10-notification-system' },
          { text: 'Ch 11 · News Feed System', link: '/chapters/11-news-feed-system' },
          { text: 'Ch 12 · Chat System', link: '/chapters/12-chat-system' },
          { text: 'Ch 13 · Search Autocomplete', link: '/chapters/13-search-autocomplete' },
          { text: 'Ch 14 · YouTube', link: '/chapters/14-youtube' },
          { text: 'Ch 15 · Google Drive', link: '/chapters/15-google-drive' },
        ]
      },
      {
        text: '📗 Volume 2',
        collapsed: false,
        items: [
          { text: 'Ch 16 · Proximity Service', link: '/chapters/16-proximity-service' },
          { text: 'Ch 17 · Nearby Friends', link: '/chapters/17-nearby-friends' },
          { text: 'Ch 18 · Google Maps', link: '/chapters/18-google-maps' },
          { text: 'Ch 19 · Distributed Message Queue', link: '/chapters/19-distributed-message-queue' },
          { text: 'Ch 20 · Metrics Monitoring & Alerting', link: '/chapters/20-metrics-monitoring' },
          { text: 'Ch 21 · Ad Click Event Aggregation', link: '/chapters/21-ad-click-aggregation' },
          { text: 'Ch 22 · Hotel Reservation System', link: '/chapters/22-hotel-reservation' },
          { text: 'Ch 23 · Distributed Email Service', link: '/chapters/23-distributed-email' },
          { text: 'Ch 24 · S3-like Object Storage', link: '/chapters/24-object-storage' },
          { text: 'Ch 25 · Real-time Gaming Leaderboard', link: '/chapters/25-gaming-leaderboard' },
          { text: 'Ch 26 · Payment System', link: '/chapters/26-payment-system' },
          { text: 'Ch 27 · Digital Wallet', link: '/chapters/27-digital-wallet' },
          { text: 'Ch 28 · Stock Exchange', link: '/chapters/28-stock-exchange' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iamakashtechie/system-design-notes' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Based on <a href="https://bytebytego.com/courses/system-design-interview" target="_blank">System Design Interview – An Insider\'s Guide</a> by Alex Xu',
      copyright: 'Notes compiled for learning purposes · Not for commercial use'
    },

    editLink: {
      pattern: 'https://github.com/iamakashtechie/system-design-notes/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
      }
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },
  },

  markdown: {
    lineNumbers: false,
    image: {
      lazyLoading: true
    }
  }
})
