<template>
  <p class="text-xl text-center mx-auto max-w-lg">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default:
        'Cupidatat reprehenderit sint proident dolore elit consectetur minim occaecat.'
    }
  }
}
</script>

<style></style>
