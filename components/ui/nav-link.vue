<template>
  <nuxt-link v-if="type == 'document'" class="pointer inline-block" :to="link">
    {{ cta }}
  </nuxt-link>
  <a v-else class="pointer inline-block" :href="link">
    {{ cta }}
  </a>
</template>

<script>
export default {
  props: {
    cta: {
      type: String,
      default: 'Learn more'
    },
    type: {
      type: String,
      default: 'Document'
    },
    link: {
      type: String,
      default: '/'
    }
  }
}
</script>
