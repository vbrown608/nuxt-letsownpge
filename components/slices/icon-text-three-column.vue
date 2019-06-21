<template>
  <div class="flex flex-wrap">
    <div
      v-for="item in items"
      :key="item.icon_heading[0].text"
      class="w-full md:w-1/3 p-6"
    >
      <div
        class="w-20 h-20 mx-auto flex flex-col justify-center items-center"
        v-html="item.icon_svg[0].text"
      />
      <div>
        <h3 class="font-bold text-lg text-center my-6">
          {{ item.icon_heading[0].text }}
        </h3>
        <rich-text
          :richtext="item.icon_copy"
          class="text-center mt-4 text-sm"
        />
      </div>
      <div class="my-6 text-center">
        <nav-link
          :link="item.icon_link"
          :cta="item.icon_cta"
          class="underline-1 cursor-pointer text-blue"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PrismicConfig from '~/prismic.config.js'

export default {
  props: PrismicConfig.defaultProps
}
</script>
