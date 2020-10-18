<template>
  <main>
    <article>
      <!-- hero -->
      <hero
        v-if="document.hero && document.hero.length > 0"
        :content="document.hero"
      />
      <div class="max-w-lg xl:max-w-xl mx-auto m-12">
        <prismic-rich-text
          v-if="document.thanks_text"
          :field="document.thanks_text"
          class="mb-12"
        />
      </div>
    </article>
    <!-- <prismic-edit-button :document-id="documentId" /> -->
  </main>
</template>

<script>
export default {
  async asyncData({ error, req, params, route, $prismic, $objToParams }) {
    try {
      const document = (await $prismic.api.getSingle('join')).data;
      return {
        document,
      };
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>
