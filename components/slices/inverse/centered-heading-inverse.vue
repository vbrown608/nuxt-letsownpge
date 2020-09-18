<template>
  <h2 class="text-center text-white text-2xl md:text-3xl">
    {{ primary.heading[0].text }}
  </h2>
</template>

<script>
import CenteredHeading from '../centered-heading';

export default {
  extends: CenteredHeading,
};
</script>
