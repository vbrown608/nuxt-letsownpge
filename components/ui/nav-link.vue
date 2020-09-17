<template>
  <nuxt-link
    v-if="link.link_type === 'Document'"
    class="pointer inline-block"
    :to="resolvedLink"
  >
    {{ cta }}
  </nuxt-link>
  <a
    v-else
    class="pointer inline-block"
    target="_blank"
    :href="link.url"
    rel="noopener"
  >
    {{ cta }}
  </a>
</template>

<script>
export default {
  props: {
    cta: {
      type: String,
      default: 'Learn more',
    },
    link: {
      type: Object,
      default: null,
    },
  },
  computed: {
    resolvedLink() {
      if (this.link.link_type === 'Document') {
        return this.$PrismicLink(this.link);
      }
      return null;
    },
  },
};
</script>
