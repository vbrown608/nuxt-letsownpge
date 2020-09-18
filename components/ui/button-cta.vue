<template>
  <nav-link
    class="py-3 px-8 bg-blue hover:bg-teal transition duration-200"
    :link="link"
    :class="{ 'text-white': isDark }"
    :target="target"
    :cta="cta"
  />
</template>

<script>
// TODO:  better color control
export default {
  props: {
    target: {
      type: String,
      default: '_self',
    },
    link: {
      type: Object,
      default: null,
    },
    color: {
      type: String,
      default: 'blue',
    },
    cta: {
      type: String,
      default: 'Learn more',
    },
  },
  computed: {
    isDark() {
      return this.$isDark(this.color);
    },
  },
};
</script>

<style></style>
