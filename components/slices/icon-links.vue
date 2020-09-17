<template>
  <div>
    <ul class="flex items-center justify-center flex-wrap -mx-3">
      <li
        v-for="item in items"
        :key="item.url"
        class="w-1/2 sm:w-1/3 md:w-1/4 px-3"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <a :href="item.icon_link.url"><div v-html="item.icon_svg[0].text" /></a>
      </li>
    </ul>
  </div>
</template>

<script>
import PrismicConfig from '~/prismic.config.js';

export default {
  props: PrismicConfig.defaultProps,
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
};
</script>
