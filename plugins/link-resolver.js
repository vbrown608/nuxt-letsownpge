// initialize
import Vue from 'vue'
/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

// import prismicRoutes from '~/getRoutes'

const PrismicLink = doc => {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'page') {
    // // disable until this is resolved
    // const regex = new RegExp(doc.uid + '$', 'g')
    // const match = prismicRoutes.filter(value => value.match(regex)).pop()
    // return match
    return '/' + doc.uid
  }

  return '/not-found'
}

Vue.prototype.$PrismicLink = doc => PrismicLink(doc)

export default PrismicLink
