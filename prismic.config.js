const apiEndpoint = `https://${process.env.PRISMIC_REPO}.prismic.io/api/v2`
const fullWidthSlices = 'full-bleed-image, change-background-color'
const defaultProps = {
  primary: {
    type: Object,
    default: null
  },
  items: {
    type: Array,
    default: null
  }
}

export default { apiEndpoint, fullWidthSlices, defaultProps }
