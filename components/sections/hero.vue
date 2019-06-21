<template>
  <header class="min-h-1/2-screen flex flex-col bg-blue relative">
    <div class="w-full h-full absolute pin z-0">
      <imgix
        v-if="content[0].hero_image != null"
        objectfit="cover"
        :originalurl="backgroundimage || content[0].hero_image.url"
        :params="imageParams"
        :aspectratios="['1:1', '16:9']"
      />
    </div>
    <div class="my-auto py-24 relative z-10 p-8">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white text-center mb-10 leading-none"
      >
        {{ content[0].hero_heading[0].text || heading }}
      </h1>
      <h2
        v-if="content[0].hero_subheading != null"
        class="text-2xl text-white text-center mb-12 leading-none"
      >
        {{ content[0].hero_subheading[0].text || subheading }}
      </h2>
      <div v-if="content[0].hero_cta_link" class="text-center">
        <button-cta
          :cta="content[0].hero_cta_text"
          :link="content[0].hero_cta_link"
        />
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
