<template>
  <div class="max-w-md xl:max-w-lg mx-auto">
    <rich-text
      v-if="primary !== null"
      class="leading-normal rich-text"
      :richtext="primary.copy"
    />
  </div>
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
