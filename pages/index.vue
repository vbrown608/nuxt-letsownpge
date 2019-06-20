<template>
  <main>
    <article>
      <!-- hero -->
      <hero
        :heading="document.hero_heading[0].text"
        :subheading="document.hero_subheading[0].text"
        :backgroundimage="document.hero_image.url"
        :buttontext="document.hero_cta_text"
        :buttonurl="document.hero_cta_link.url"
      />
      <!-- slices -->
      <slices
        v-if="document.body != null && document.body.length > 0"
        :key="`slices-${documentId}`"
        :content="document.body"
        class="py-12"
      />
    </article>
    <prismic-edit-button :document-id="documentId" />
  </main>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'

export default {
  async asyncData({ error, req, params, route }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })

      let document = {}
      const result = await api.getSingle('home')
      document = result.data
      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        document,
        documentId: result.id
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
