<template>
  <div class="max-w-lg xl:max-w-xl mx-auto">
    <div
      v-for="(magnate, index) in magnateContent"
      :key="magnate + index"
      class="p-3 w-1/2 md:1/3 lg:1/4"
    >
      {{ magnate }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    primary: {
      type: Object,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    magnates: {
      type: Array,
      default: null
    }
  },
  computed: {
    magnateContent() {
      if (this.items != null && this.magnates != null) {
        return this.items.map(magnate => {
          return this.magnates.find(obj => obj.uid === magnate.magnate.slug)
        })
      }
      return null
    }
  },
  mounted() {
    // console.log(this.items)
  }
  /* to merge the default values, use the below code instead */
  /*
  props: {
    ...defaultProps,
    NEWPROPERTY: {
      type: TYPE
      default: DEFAULT
    }
  }
  */
}
</script>
