<template>
  <div>
    <div class="flex flex-wrap justify-center -mx-3">
      <div
        v-for="(item, index) in items"
        :key="`${uid}-item-${index}`"
        class="w-1/2 md:w-1/3 px-3 text-center flex-col mb-12"
      >
        <div class="mx-auto w-1/2 mb-6">
          <imgix
            class="rounded-full overflow-hidden"
            :originalurl="item.image.url"
            :params="{ fit: 'facearea', facepad: '2' }"
            :object-fit="'cover'"
          />
        </div>
        <h3 class="mb-6 text-lg font-bold">{{ item.image_caption[0].text }}</h3>
        <rich-text class="rich-text" :richtext="item.image_description" />
      </div>
    </div>
  </div>
</template>

<script>
import PrismicConfig from '~/prismic.config.js';

export default {
  props: PrismicConfig.defaultProps,
  data() {
    return {
      uid: this._uid,
    };
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
