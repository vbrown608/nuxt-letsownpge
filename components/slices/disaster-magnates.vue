<template>
  <div>
    <div class="max-w-4xl xl:max-w-6xl mx-auto">
      <div class="flex flex-wrap">
        <div
          v-for="(magnate, index) in magnateContent"
          :key="magnate + index"
          class="p-3 w-1/2 md:w-1/3 lg:w-1/4 text-center cursor-pointer"
          @click="openModal(magnate)"
        >
          <div class="mx-auto w-2/3 mb-3">
            <imgix
              class="rounded-full overflow-hidden"
              :originalurl="magnate.data.headshot.url"
              :resolution="0.6"
              :maxwidth="400"
              :params="{
                fit: 'facearea',
                facepad: '2',
                htn: 6,
                duotone: '005179,ffffff',
              }"
              :object-fit="'cover'"
            />
          </div>
          <div>{{ magnate.data.full_name }}</div>
          <div class="text-xs uppercase text-blue font-bold tracking-wider">
            {{ magnate.data.title }}
          </div>
          <div
            class="opacity-50 mt-2 text-blue hover:opacity-100 transition text-xxs font-bold tracking-wider uppercase flex justify-center items-center"
          >
            <span>Learn More</span> <i class="material-icons ml-1">launch</i>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-show="modalOpen"
        class="fixed inset-0 h-screen w-screen bg-white-alpha z-50 p-6 flex flex-col items-center justify-center"
      >
        <div class="absolute inset-0 z-10" @click="closeModal" />
        <div
          class="bg-white w-full max-w-xl min-h-1/2-screen shadow p-6 md:p-12 relative z-20"
          @click="() => true"
        >
          <button
            class="text-xl absolute top-0 right-0 p-3"
            @click="closeModal"
          >
            <i class="material-icons">close</i>
          </button>
          <div class="mx-auto w-2/3 mb-6">
            <imgix
              class="rounded-full overflow-hidden"
              :originalurl="modalImage"
              :resolution="0.7"
              :maxwidth="600"
              :params="{
                fit: 'facearea',
                facepad: '2',
                htn: 8,
                duotone: '005179,ffffff',
              }"
              :object-fit="'cover'"
            />
          </div>
          <div class="text-lg">{{ modalName }}</div>
          <div class="text-xs uppercase text-blue font-bold tracking-wider">
            {{ modalTitle }}
          </div>
          <div class="mt-3 text-sm">
            <rich-text :richtext="modalDesc" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    primary: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
    magnates: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      modalOpen: false,
      modalImage: '',
      modalDesc: '',
      modalName: '',
      modalTitle: '',
    };
  },
  computed: {
    magnateContent() {
      if (this.items != null && this.magnates != null) {
        return this.items.map(magnate => {
          return this.magnates.find(
            obj =>
              obj.uid.replace('.', '') === magnate.magnate.slug.replace('.', '')
          );
        });
      }
      return null;
    },
  },
  mounted() {
    // console.log(this.items)
  },
  methods: {
    openModal(magnate) {
      this.modalOpen = true;
      this.modalImage = magnate.data.headshot.url;
      this.modalDesc = magnate.data.description;
      this.modalName = magnate.data.full_name;
      this.modalTitle = magnate.data.title;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
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
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  /* transform: translateX(10px); */
  opacity: 0;
}
</style>
