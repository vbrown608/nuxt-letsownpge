<template>
  <h2 class="text-center text-2xl md:text-3xl">
    {{ primary.heading[0].text }}
  </h2>
</template>

<script>
import PrismicConfig from '~/prismic.config.js'

export default {
  props: PrismicConfig.defaultProps
  /* to merge the default values, use the below code instead */
  /*
  props: {
    ...defaultProps,
    NEWPROPERTY: {
      type: TYPE
      default: DEFAULT
    }
  }
  */
}
</script>
