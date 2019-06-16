import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import PrismicConfig from '~/prismic.config'
import linkResolver from './link-resolver'
import htmlSerializer from './html-serializer'

Vue.use(PrismicVue, {
  linkResolver,
  htmlSerializer
})

Vue.prototype.$defaultProps = () => PrismicConfig.defaultProps
