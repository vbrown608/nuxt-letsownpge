<template>
  <footer class="bg-blue w-full p-8 mt-auto flex-no-shrink">
    <container>
      <div class="flex flex-wrap md:flex-no-wrap -mx-6">
        <div class="flex flex-col mb-4 px-6">
          <nuxt-link class="text-white text-xl mb-3" to="/"
            >Let's Own PG&E</nuxt-link
          >
          <nuxt-link class="text-white mb-2" to="/the-problem"
            >The Problem</nuxt-link
          >
          <nuxt-link class="text-white mb-2" to="/our-demands"
            >The Solution</nuxt-link
          >
          <nuxt-link class="text-white mb-2" to="/benefits">Benefits</nuxt-link>
          <nuxt-link class="text-white mb-2 font-bold" to="/join"
            >Join</nuxt-link
          >
        </div>
        <div class="px-6 max-w-sm">
          <p class="text-white">
            PG&E is a profitable disaster. California deserves a utility run for
            people, not profit. The solution is to put it in the hands of the
            public and PG&E's workers.
          </p>
        </div>
        <div class="footer-social hidden"></div>
      </div>
    </container>
  </footer>
</template>

<script>
export default {};
</script>
