import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './link-resolver'
import htmlSerializer from './html-serializer'
import PrismicConfig from '~/prismic.config'

Vue.use(PrismicVue, {
  linkResolver,
  htmlSerializer
})

Vue.prototype.$defaultProps = () => PrismicConfig.defaultProps
