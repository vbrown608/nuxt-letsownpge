<template>
  <div class="w-full">
    <div
      v-for="(item, index) in items"
      :id="`${uid}-row-${index}`"
      :key="`${uid}-row-${index}`"
      class="flex flex-wrap flex-shrink-0 mb-12 -mx-3"
    >
      <div
        class="w-full md:w-1/2 md:w-3/7 bg-grey-200 md:px-3"
        :class="{
          'md:order-2': index % 2 === 0,
        }"
      >
        <imgix
          :originalurl="item.image.url"
          class="absolute inset-0"
          object-fit="cover"
        />
      </div>
      <div
        class="py-4 md:w-1/2 md:w-4/7 bg-grey-200 md:px-6"
        :class="{ 'md:order-1': index % 2 === 0 }"
      >
        <h4 class="text-gray-500 text-xs mb-3">
          {{ item.row_subheading[0].text }}
        </h4>
        <h3 class="mb-6 text-xl font-bold">{{ item.row_heading[0].text }}</h3>
        <rich-text class="rich-text mb-6" :richtext="item.row_copy" />
        <div>
          <nav-link
            class="text-blue underline-1 hover:text-teal transition"
            :link="item.row_link"
            :cta="item.row_cta"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrismicConfig from '~/prismic.config.js';
// import linkResolver from '~/plugins/link-resolver'
export default {
  props: PrismicConfig.defaultProps,
  data() {
    return {
      uid: this._uid,
    };
  },
  methods: {
    // linkResolver(doc) {
    //   return linkResolver(doc)
    // }
  },
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
