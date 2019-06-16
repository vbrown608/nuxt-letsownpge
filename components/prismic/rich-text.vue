<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-if="richtext" v-html="content" />
</template>

<script>
// eslint-disable-next-line no-unused-vars
import PrismicDOM from 'prismic-dom'

export default {
  props: {
    richtext: {
      type: Array,
      default: null
    }
  },
  computed: {
    content() {
      return PrismicDOM.RichText.asHtml(this.richtext)
    }
  }
}
</script>

<style></style>
