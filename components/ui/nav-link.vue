<template>
  <nuxt-link
    v-if="link.link_type === 'Document'"
    class="pointer inline-block"
    :to="link.uid"
  >
    {{ cta }}
  </nuxt-link>
  <a v-else class="pointer inline-block" target="_blank" :href="link.url">
    {{ cta }}
  </a>
</template>

<script>
// import PrismicDOM from 'prismic-dom'

export default {
  props: {
    cta: {
      type: String,
      default: 'Learn more'
    },
    link: {
      type: Object,
      default: null
    }
  },
  computed: {
    // resolvedLink() {
    //   if (this.link.link_type === 'Document') {
    //     return PrismicDOM.Link.url(this.link)
    //   }
    //   return null
    // }
  }
}
</script>
