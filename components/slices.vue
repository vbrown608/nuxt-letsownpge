<template>
  <section v-if="loaded">
    <div
      v-for="(component, index) in content"
      :id="`slice-${index}`"
      :key="`slice-${index}`"
      :class="
        'slice--' +
        kebabify(component.slice_type) +
        (isDark(bgColor(index), kebabify(component.slice_type))
          ? '-inverse'
          : '')
      "
    >
      <component
        :is="
          kebabify(component.slice_type) +
          (isDark(bgColor(index), kebabify(component.slice_type))
            ? '-inverse'
            : '')
        "
        v-if="component.slice_type == 'disaster_magnates'"
        :style="`background:${bgColor(index)};`"
        :class="{ inverse: false }"
        :magnates="magnates"
        :primary="component.primary"
        :items="component.items.length > 0 ? component.items : null"
      />
      <component
        :is="
          kebabify(component.slice_type) +
          (isDark(bgColor(index), kebabify(component.slice_type))
            ? '-inverse'
            : '')
        "
        v-if="hasNoContainer(kebabify(component.slice_type))"
        :style="`background:${bgColor(index)};`"
        :class="{ inverse: false }"
        :primary="component.primary"
        :items="component.items.length > 0 ? component.items : null"
      />
      <div
        v-else
        :primary="component.primary"
        :items="component.items.length > 0 ? component.items : null"
        :style="`background:${bgColor(index)};`"
      >
        <container>
          <component
            :is="
              kebabify(component.slice_type) +
              (isDark(bgColor(index), kebabify(component.slice_type))
                ? '-inverse'
                : '')
            "
            :primary="component.primary"
            :items="component.items.length > 0 ? component.items : null"
          />
        </container>
      </div>
    </div>
  </section>
</template>

<script>
import PrismicConfig from '~/prismic.config.js';
import TailwindConfig from '~/tailwind.config.js';
export default {
  props: {
    content: {
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
      loaded: false,
      defaultBg: TailwindConfig.theme.extend.colors.white || '#ffffff',
      colors: {},
      previousSlice: null,
    };
  },
  created() {
    const app = this;
    app.loaded = this.buildColors();
  },
  methods: {
    buildColors() {
      return new Promise(resolve => {
        // build Colors
        const colors = {};
        for (const component in this.content) {
          const value = this.content[component];
          const key = component;
          if (
            String(value.slice_type).replace(/_/g, '-') ===
            'change-background-color'
          ) {
            colors[key] = value.primary.background_color;
          }
        }
        // give impossibly high number for end of colors object
        colors[9999] = 'transparent';
        this.colors = colors;
        resolve(true);
      });
    },
    hasNoContainer(container) {
      if (PrismicConfig.fullWidthSlices.includes(container)) {
        return true;
      }
      return false;
    },
    // determine bg color by seeing if component comes after change-background-color slice
    bgColor(num) {
      let lastCount = 0;
      num = parseInt(num);
      const colors = Object.keys(this.colors);
      for (const count of colors) {
        // eslint-disable-next-line no-console
        if (num < count && num >= lastCount && lastCount !== 0) {
          return this.colors[lastCount];
        }
        lastCount = count;
      }
      return this.defaultBg;
    },
    // not a full kebabing algo but replaces `_` from prismic
    kebabify(string) {
      return String(string).replace(/_/g, '-');
    },
    // check if color is dark or not
    isDark(color, sliceType) {
      // Variables for red, green, blue values
      let r, g, b;

      if (sliceType === 'change-background-color') {
        return false;
      }

      // Check the format of the color, HEX or RGB?
      // eslint-disable-next-line unicorn/prefer-starts-ends-with
      if (color.match(/^rgb/)) {
        // If HEX --> store the red, green, blue values in separate variables
        color = color.match(
          /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
        );

        r = color[1];
        g = color[2];
        b = color[3];
      } else {
        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +(
          '0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&')
        );

        r = color >> 16;
        g = (color >> 8) & 255;
        b = color & 255;
      }

      // Using the HSP value, determine whether the color is light or dark
      // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
      const hsp = Math.sqrt(
        0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)
      );
      if (hsp > 150) {
        return false;
      }

      return true;
    },
  },
};
</script>
