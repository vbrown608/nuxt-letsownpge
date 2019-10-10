<template>
  <main>
    <article>
      <!-- hero -->
      <hero
        v-if="document.hero && document.hero.length > 0"
        :content="document.hero"
      />
      <!-- slices -->
      <slices
        v-if="document.body != null && document.body.length > 0"
        :key="`slices-${documentId}`"
        :content="document.body"
        :magnates="magnates"
        class="py-12"
      />
    </article>
    <!-- <prismic-edit-button :document-id="documentId" /> -->
  </main>
</template>

<script>
import Prismic from 'prismic-javascript'
import ImgixClient from 'imgix-core-js'
import PrismicConfig from '~/prismic.config.js'

import imgixConfig from '~/imgix.config.js'

export default {
  async asyncData({ params, error, req }) {
    try {
      // eslint-disable-next-line no-console
      console.log(params)
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })
      let document = {}
      const result = await api.getByUID(
        'page',
        params.pathMatch.split('/').pop()
      )
      document = result.data
      // Load the edit button
      // if (process.client) window.prismic.setupEditButton()

      const client = new ImgixClient({
        domain: imgixConfig.subdomain + '.imgix.net',
        secureURLToken: imgixConfig.token
      })

      const ixparams = {
        auto: 'format,compress',
        fit: 'max'
      }

      const metaImg = () => {
        if (document.meta_image.length > 0) {
          return client.buildURL(encodeURI(document.meta_image[0].url), {
            ...ixparams,
            w: 1200,
            h: 1200
          })
        }
        return ''
      }

      const meta = {
        title:
          document.meta_title != null
            ? document.meta_title
            : "Let's Own PG&E: " + document.page_title,
        description:
          document.meta_description != null
            ? document.meta_description
            : "PG&E is a profitable disaster. California deserves a utility run for people, not profit. The solution is to put it in the hands of the public and PG&E's workers.",
        image: metaImg()
      }

      // get magnates
      const magnates = await api
        .query(Prismic.Predicates.at('document.type', 'disaster_magnate'))
        .then(response => {
          return response.results
          // response is the response object, response.results holds the documents
        })

      return {
        document,
        magnates,
        documentId: result.id,
        meta
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.meta.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.meta.image
        }
      ]
    }
  }
}
</script>
