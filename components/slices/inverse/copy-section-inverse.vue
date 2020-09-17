<template>
  <container>
    <div class="max-w-md xl:max-w-lg mx-auto">
      <rich-text
        v-if="primary !== null"
        class="leading-normal rich-text-inverse"
        :richtext="primary.copy"
      />
    </div>
  </container>
</template>

<script>
export default {
  props: {
    primary: {
      type: Object,
      default: null,
    },
  },
};
</script>
