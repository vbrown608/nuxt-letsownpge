<template>
  <nav class="bg-white w-full flex-no-shrink h-20 z-40 relative">
    <container class="pt-0 pb-0 h-full">
      <div class="flex flex-wrap h-full items-center -mx-8">
        <div class="px-8">
          <nuxt-link class="text-blue text-xl" to="/">Let's Own PG&E</nuxt-link>
        </div>
        <div
          class="transition duration-200 overflow-hidden flex justify-center h-full w-24 md:w-0 opacity-100 md:opacity-0 ml-auto px-3"
          :class="{
            'text-blue': !menu.expanded,
            'bg-blue text-white': menu.expanded,
          }"
        >
          <button
            class="text-xl transition duration-200 w-full"
            @click="menu.expanded = !menu.expanded"
          >
            <i class="material-icons">menu</i>
          </button>
        </div>
        <div class="w-full md:hidden"></div>
        <transition-expand>
          <div
            v-show="menu.expanded"
            class="bg-blue md:bg-transparent ml-auto px-8 flex flex-col md:flex-row items-end"
            style="box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 2px"
            @click="menu.expanded = !menu.expanded"
          >
            <div class="h-6 flex-shrink-0" />
            <!-- <nuxt-link
              class="block text-white md:text-blue p-3 uppercase tracking-wide"
              to="/problem"
              >The Problem</nuxt-link
            > -->
            <nuxt-link
              class="block text-white md:text-blue p-3 uppercase tracking-wide"
              to="/history"
              >The History</nuxt-link
            >
            <nuxt-link
              class="block text-white md:text-blue p-3 uppercase tracking-wide"
              to="/our-demands"
              >The Plan</nuxt-link
            >
            <div class="px-3 mt-3 md:mt-0">
              <nuxt-link
                class="inline-block text-blue bg-white md:text-white py-3 px-8 uppercase tracking-widest md:bg-blue"
                to="/join"
                >Join</nuxt-link
              >
            </div>
            <div class="h-10 flex-shrink-0" />
          </div>
        </transition-expand>
        <div class="ml-auto hidden md:flex flex-row items-center">
          <!-- <nuxt-link
            class="block text-sm text-blue p-3 uppercase tracking-wide"
            to="/problem"
            >The Problem</nuxt-link
          > -->
          <nuxt-link
            class="block text-sm text-blue p-3 uppercase tracking-wide"
            to="/history"
            >The History</nuxt-link
          >
          <nuxt-link
            class="block text-sm text-blue p-3 uppercase tracking-wide"
            to="/our-demands"
            >The Plan</nuxt-link
          >
          <div class="px-3 mt-3 md:mt-0">
            <nuxt-link
              class="inline-block text-sm text-white py-2 px-8 uppercase tracking-widest md:bg-blue"
              to="/join"
              >Join</nuxt-link
            >
          </div>
        </div>
      </div>
    </container>
  </nav>
</template>

<script>
import Prismic from 'prismic-javascript';
import PrismicConfig from '~/prismic.config.js';
export default {
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getSingle('site_settings');
      document = result.data;

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      return {
        document,
        documentId: result.id,
      };
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  data() {
    return {
      menu: {
        expanded: false,
      },
    };
  },
};
</script>
