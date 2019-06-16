import 'dotenv/config'
import Prismic from 'prismic-javascript'
import pkg from './package'
import PrismicConfig from './prismic.config'

const getParents = (page, query) => {
  // does page have parent
  if (page.data.parent_page.hasOwnProperty('uid')) {
    let parentURI
    // build parent(s)
    const pages = query.results
    parentURI = page.data.parent_page.uid + '/'
    // grandparent
    const grandparent = pages
      .filter(relative => {
        return relative.uid === page.data.parent_page
      })
      .pop()
    if (grandparent && grandparent.data.parent_page.hasOwnProperty('uid')) {
      parentURI = grandparent.data.parent_page.uid + '/' + parentURI
      // great grand parent
      parentURI = page.data.parent_page.uid + '/'
      const greatgrandparent = pages
        .filter(relative => {
          return relative.uid === grandparent.data.parent_page
        })
        .pop()
      if (
        greatgrandparent &&
        greatgrandparent.data.parent_page.hasOwnProperty('uid')
      ) {
        parentURI = greatgrandparent.data.parent_page.uid + '/' + parentURI
        const greatgreatgrandparent = pages
          .filter(relative => {
            return relative.uid === greatgrandparent.data.parent_page
          })
          .pop()
        if (
          greatgreatgrandparent &&
          grandparent.data.parent_page.hasOwnProperty('uid')
        ) {
          // eslint-disable-next-line no-console
          console.log(
            `${page.uid}'s heritage is too deep, available at ${parentURI}`
          )
        }
      }
    }
    return parentURI
  }
  // no parent
  return ''
}

// TODO: move to module and import for cleaner config file
// TODO: make page config object in prismic.config file and feed to function
const prismicRoutes = new Promise((resolve, reject) => {
  // get api
  resolve(Prismic.getApi(PrismicConfig.apiEndpoint))
})
  .then(api => {
    // get query
    return new Promise((resolve, reject) => {
      resolve(api.query(''))
    })
  })
  .then(query => {
    // process query to get routes
    const routes = []
    query.results
      .filter(page => {
        if (page.type === 'page') {
          return true
        }
        return false
      })
      .map(page => {
        // eslint-disable-next-line no-console
        // check if page exists and has parent
        if (page.type === 'page') {
          const parents = getParents(page, query)
          routes.push(`/${parents}${page.uid}`)
        }
      })
    routes.push('/preview')
    routes.push('/')
    return routes
  })

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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ],
    script: [
      {
        innerHTML:
          '{ window.prismic = { endpoint: "' +
          PrismicConfig.apiEndpoint +
          '"} }'
      },
      { src: '//static.cdn.prismic.io/prismic.min.js' }
    ],
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
      families: ['Lato:400,400i,700,7s00i']
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
