<template>
  <div>
    <div
      v-show="loaded"
      :ref="`plyr${_uid}`"
      :data-plyr-provider="provider"
      :data-plyr-embed-id="id"
    />
    <div v-show="!loaded" class="aspect-ratio-16/9" />
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    videourl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      plyr: null,
      provider: null,
      loaded: false,
      id: null,
    };
  },
  mounted() {
    this.loadVideo();
  },
  methods: {
    // get video provider + id from url
    // https://stackoverflow.com/questions/9552883/regex-to-extract-domain-and-video-id-from-youtube-vimeo-url
    // eslint prefer-destructuring is disabled below, in the intereest of actually cleaner code and time
    getParm(url, base) {
      const re = new RegExp(`(\\?|&)"${base}"\\=([^&]*)(&|$)`);
      const matches = url.match(re);
      if (matches) {
        return matches[2];
      }
      return '';
    },
    loadVideo() {
      if (process.client) {
        const app = this;
        const Plyr = require('plyr');
        let matches;
        const url = this.videourl;
        if (url.match('http(s)?://(www.)?youtube|youtu.be')) {
          if (url.match('embed')) {
            // eslint-disable-next-line prefer-destructuring
            this.id = url.split(/embed\//)[1].split('"')[0];
          } else {
            // eslint-disable-next-line prefer-destructuring
            this.id = url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
          }
          this.provider = 'youtube';
        } else if (matches === url.match(/vimeo.com\/(\d+)/)) {
          this.provider = 'vimeo';
          // eslint-disable-next-line prefer-destructuring
          this.id = matches[1];
        } else {
          return;
        }
        // increase the key value to force a reload of the component
        this.$nextTick(() => {
          app.plyr = new Plyr(this.$refs[`plyr${app._uid}`]);
        });
        // eslint-disable-next-line no-console
        this.loaded = true;
      }
    },
  },
};
</script>
