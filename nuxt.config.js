import 'dotenv/config'
import pkg from './package'
import prismicRoutes from './getRoutes'
import PrismicConfig from './prismic.config'

export default {
  mode: 'universal',

  // container name __ + value
  globalName: 'app',

  // PWA manifest
  manifest: {
    short_name: 'letsownpge',
    name: "Let's Own PG&E",
    lang: 'en',
    theme_color: '#005179',
    display: 'fullscreen',
    background_color: '#005179'
  },

  // PWA Options
  workbox: {
    offlinePage: '/offline.html'
    // Workbox options
  },

  env: {
    IMGIX_TOKEN: process.env.IMGIX_TOKEN,
    IMGIX_SUBDOMAIN: process.env.IMGIX_SUBDOMAIN,
    PRISMIC_REPO: process.env.PRISMIC_REPO
  },

  /*
   ** Headers of the page
   */
  head: {
    title: "Let's Own PG&E",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ],
    // script: [
    //   {
    //     innerHTML:
    //       '{ window.prismic = { endpoint: "' +
    //       PrismicConfig.apiEndpoint +
    //       '"} }'
    //   },
    //   { src: '//static.cdn.prismic.io/prismic.min.js' }
    // ],
    __dangerouslyDisableSanitizers: ['script'],
    htmlAttrs: {
      class: 'h-full w-full relative'
    },
    bodyAttrs: {
      class: 'h-full w-full relative bg-white'
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/index.pcss'],

  webfontloader: {
    google: {
      families: ['Rubik:400,400i,500,500i']
    }
  },

  // plugins
  plugins: [
    { src: '@/plugins/global.js' },
    { src: '@/plugins/link-resolver.js' },
    { src: '@/plugins/html-serializer.js' },
    { src: '@/plugins/prismic-vue.js' },
    { src: '@/plugins/is-dark.js' }
  ],

  // modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    'nuxt-purgecss',
    ['@nuxtjs/google-tag-manager', { id: process.env.GTM_ID }]
  ],

  // Route Settings

  router: {
    routeNameSplitter: '/'
  },

  generate: {
    routes: () => {
      return prismicRoutes
    }
  },

  // Default Transition
  pageTransition: {
    name: 'transition--fade',
    mode: 'out-in'
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  // server settings
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, '.ssl/localhost.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, '.ssl/localhost.pem'))
    // }
  },

  // build (webpack) config
  build: {
    // analyze: true,
    // push to webpack property
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    },
    // template
    // config.module.rules.push({
    //   enforce: 'pre',
    //   test: /\.(js|vue)$/,
    //   loader: 'eslint-loader',
    //   exclude: /(node_modules)/
    // })

    extractCSS: true,

    // postcss config, replaces ./postcss.config.js
    postcss: {
      parser: 'postcss-scss',
      plugins: {
        'postcss-import': {},
        tailwindcss: './tailwind.config.js',
        'postcss-normalize': {},
        precss: {},
        'postcss-nested': {},
        'postcss-preset-env': {},
        cssnano: {}
      },
      order: [
        'postcss-import',
        'tailwindcss',
        'postcss-normalize',
        'precss',
        'postcss-nested',
        'postcss-preset-env',
        'cssnano'
      ]
    },

    purgecss: {
      whitelist: ['body', 'html'],
      whitelistPatterns: [/\^transition--.*/],
      extractors: [
        {
          extractor: class {
            static extract(content) {
              return content.match(/[A-z0-9-:\\/]+/g)
            }
          },
          extensions: ['html', 'vue', 'js']
        }
      ]
    }
  }
}
