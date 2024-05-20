
module.exports = {
  seo: {
  "title": "ParrachoStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | ParrachoStore",
  "author": "parracho"
},

  // Theming
  theme: 'midnight',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "parrachostore",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://parrachostore.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/jerseys",
    search: "/s?q=Adidas",
    pdp: "/flamengo-2022-home/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/flamengo-2022-home/p",
      collection: "/jerseys",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/flamengo-2022-home/p",
      collection: "/jerseys",
      collection_filtered: "/jerseys/?category-1=jerseys&brand=Adidas&facets=category-1%2Cbrand%27",
      search: "/s?q=Adidas",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://parrachostore.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
