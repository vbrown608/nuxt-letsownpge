import Vue from 'vue';

Vue.prototype.$isDark = (color, sliceType) => {
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
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // Using the HSP value, determine whether the color is light or dark
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  if (hsp > 150) {
    return false;
  }

  return true;
};
