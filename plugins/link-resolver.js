/* eslint-disable no-console */
/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

import prismicRoutes from '~/getRoutes'

export default function(doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'page') {
    const regex = new RegExp(doc.uid + '$', 'g')
    const match = prismicRoutes.filter(value => value.match(regex)).pop()
    return match
  }

  return '/not-found'
}
