<template>
  <figure class="w-full h-full relative overflow-hidden">
    <picture
      v-images-loaded:on.progress="(loaded = true)"
      class="w-full h-full transition duration-200 absolute inset-0 z-10"
      :class="{
        'opacty-0': !loaded,
      }"
    >
      <source
        v-for="(value, propertyName) in tailwind.theme.screens"
        :key="`source${propertyName}`"
        :media="`(max-width: ${value})`"
        :srcset="imgixUrls[propertyName].url"
      />
      <img
        :src="
          imgixUrls[Object.keys(imgixUrls)[Object.keys(imgixUrls).length - 1]]
            .url
        "
        class="w-full h-full"
        :class="{
          'object-cover': objectfit === 'cover',
          'object-contain': objectfit === 'contain',
        }"
      />
    </picture>
    <img
      class="w-full h-full relative z-0"
      :src="imgixUrls.pre"
      :class="{
        'object-cover': objectfit === 'cover',
        'object-contain': objectfit === 'contain',
      }"
    />
    <figcaption v-if="caption" :class="captionclasses" :html="caption" />
  </figure>
</template>

<script>
import tailwind from '~/tailwind.config.js';

export default {
  name: 'Imgix',
  directives: {
    imagesLoaded: () => {
      if (process.client) {
        // detect when images are loaded
        return require('vue-images-loaded');
      }
    },
  },
  props: {
    captionclasses: {
      type: String,
      default: 'mt-2 text-xs opacity-75',
    },
    originalurl: {
      type: String,
      default: '',
    },
    resolution: {
      type: Number,
      default: 1,
    },
    maxwidth: {
      type: Number,
      default: null,
    },
    objectfit: {
      type: String,
      default: 'contain',
    },
    objectposition: {
      type: String,
      default: 'center',
    },
    aspectratios: {
      type: Array,
      default: () => {
        return new Array(['1:1']);
      },
    },
    params: {
      type: Object,
      default: null,
    },
    caption: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      tailwind,
      loaded: false,
    };
  },
  computed: {
    imgixUrls() {
      // configcli
      const urls = {};
      const defaultParams = {
        auto: 'format,compress',
        fit: 'max',
      };
      const params = { ...defaultParams, ...this.params };
      // create placeholder
      const aspectratio =
        (this.aspectratios[0] ||
          this.aspectratios[this.aspectratios.length - 1]) + ' ';
      const aspectRatioMultiplier =
        parseFloat(aspectratio.split(':')[1]) /
        parseFloat(aspectratio.split(':')[0]);
      let width = tailwind.theme.screens.sm;
      width = parseInt(width.replace('px', ''));
      let height = width * aspectRatioMultiplier;
      height = height.toFixed(0);
      urls.pre =
        this.originalurl +
        this.$objToParams({
          ...params,
          w: width,
          h: height,
          blur: 120,
          px: 40,
          colorquant: 24,
        });
      // create srcs
      let loopindex = 0;
      for (const screen in tailwind.theme.screens) {
        const aspectratio =
          (this.aspectratios[loopindex] ||
            this.aspectratios[this.aspectratios.length - 1]) + ' ';
        const aspectRatioMultiplier =
          parseFloat(aspectratio.split(':')[1]) /
          parseFloat(aspectratio.split(':')[0]);
        let width = tailwind.theme.screens[screen];
        width =
          this.maxwidth != null &&
          parseInt(width.replace('px', '')) * this.resolution > this.maxwidth
            ? this.maxwidth
            : parseInt(width.replace('px', '')) * this.resolution;
        width = process.client
          ? (width * window.devicePixelRatio).toFixed(0)
          : width;
        let height = width * aspectRatioMultiplier;
        height = height.toFixed(0);
        urls[screen] = {};
        urls[screen].url =
          this.originalurl +
          this.$objToParams({
            ...params,
            w: width,
            h: height,
          });
        urls[screen].loaded = false;
        loopindex += loopindex;
      }
      return urls;
    },
  },
};
</script>

<style></style>
