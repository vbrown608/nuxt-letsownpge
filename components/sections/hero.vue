<template>
  <header class="min-h-1/2-screen flex flex-col bg-blue relative">
    <div class="w-full h-full absolute pin z-0">
      <imgix
        objectfit="cover"
        :originalurl="backgroundimage || content[0].backgroundimage"
        :params="imageParams"
        :aspectratios="['1:1', '16:9']"
      />
    </div>
    <div class="my-auto py-24 relative z-10 p-8">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white text-center mb-10 leading-none"
      >
        {{ heading }}
      </h1>
      <h2 class="text-2xl text-white text-center mb-12 leading-none">
        {{ subheading }}
      </h2>
      <div class="text-center">
        <nuxt-link
          :to="`/${buttonurl}`"
          class="inline-block px-8 py-2"
          :class="{
            'bg-white text-blue': !backgroundimage,
            'bg-blue text-white': backgroundimage
          }"
          >{{ buttontext }}</nuxt-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: null
    },
    heading: {
      type: String,
      default: 'Heading'
    },
    subheading: {
      type: String,
      default: 'Heading'
    },
    buttonurl: {
      type: String,
      default: ''
    },
    buttontext: {
      type: String,
      default: 'Button Text'
    },
    backgroundimage: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      imageParams: {
        blend: '000000',
        bm: 'multiply',
        balph: '40',
        crop: 'faces,edges,entropy'
      }
    }
  }
}
</script>
