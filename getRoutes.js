import Prismic from 'prismic-javascript'
import PrismicConfig from './prismic.config'

// // eslint-disable-next-line no-unused-vars
// const getParents = (page, query) => {
//   // does page have parent
//   if (page.data.parent_page.hasOwnProperty('uid')) {
//     let parentURI
//     // build parent(s)
//     const pages = query.results
//     parentURI = page.data.parent_page.uid + '/'
//     // grandparent
//     const grandparent = pages
//       .filter(relative => {
//         return relative.uid === page.data.parent_page
//       })
//       .pop()
//     if (grandparent && grandparent.data.parent_page.hasOwnProperty('uid')) {
//       parentURI = grandparent.data.parent_page.uid + '/' + parentURI
//       // great grand parent
//       parentURI = page.data.parent_page.uid + '/'
//       const greatgrandparent = pages
//         .filter(relative => {
//           return relative.uid === grandparent.data.parent_page
//         })
//         .pop()
//       if (
//         greatgrandparent &&
//         greatgrandparent.data.parent_page.hasOwnProperty('uid')
//       ) {
//         parentURI = greatgrandparent.data.parent_page.uid + '/' + parentURI
//         const greatgreatgrandparent = pages
//           .filter(relative => {
//             return relative.uid === greatgrandparent.data.parent_page
//           })
//           .pop()
//         if (
//           greatgreatgrandparent &&
//           grandparent.data.parent_page.hasOwnProperty('uid')
//         ) {
//           // eslint-disable-next-line no-console
//           console.log(
//             `${page.uid}'s heritage is too deep, available at ${parentURI}`
//           )
//         }
//       }
//     }
//     return parentURI
//   }
//   // no parent
//   return ''
// }

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
          // disable until I can figure this out
          // will need redirects set up later
          const parents = '' // getParents(page, query)
          routes.push(`/${parents}${page.uid}`)
        }
      })
    routes.push('/preview')
    routes.push('/')
    return routes
  })

export default prismicRoutes
