<template>
  <container>
    <div class="max-w-md xl:max-w-lg mx-auto">
      <rich-text
        v-if="primary !== null"
        class="rich-text-inverse leading-normal text-center"
        :richtext="primary.copy"
      />
    </div>
  </container>
</template>

<script>
import CenteredCopy from '../centered-copy.vue'

export default {
  extends: CenteredCopy
}
</script>
