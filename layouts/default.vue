<template>
  <div class="h-full w-full font-sans flex flex-col min-h-screen">
    <app-header />
    <nuxt />
    <app-footer />
    <!-- <script>
      window.prismic = {
        endpoint: 'https://letsownpge.cdn.prismic.io/api/v2'
      }
    </script>
    <script
      type="text/javascript"
      src="https://static.cdn.prismic.io/prismic.min.js"
    /> -->
  </div>
</template>

<script>
export default {
  // mounted() {
  //   this.removeWidows()
  // },
  // methods: {
  //   removeWidows() {
  //     // add non-breaking-space between last two words of text that is longer than
  //     // 3 words and the last word is less than 13 characters and the second-to-last
  //     // word is less than 11 characters. if the penultimate word is less than 5
  //     // characters and the last word is less than 9, then the two words before the widow will be pulled down.
  //     document
  //       .querySelectorAll('h1,h2,h3,h4,h5,p,blockquote,li,ol')
  //       .forEach(el => {
  //         const element = el
  //         if (element.innerHTML.length > 0) {
  //           const copy = element.innerHTML.split(' ')
  //           if (copy.length > 3) {
  //             const lastword = copy[copy.length - 1]
  //             const penultword = copy[copy.length - 2]
  //             const antepenultword = copy[copy.length - 3]
  //             if (
  //               lastword.length < 9 &&
  //               penultword.length < 4 &&
  //               antepenultword.length < 5
  //             ) {
  //               // replace last two breaking spaces with nbsps
  //               element.innerHTML = el.innerHTML.replace(
  //                 / (?=[^ ]*$)/i,
  //                 '&nbsp;'
  //               )
  //               element.innerHTML = el.innerHTML.replace(
  //                 / (?=[^ ]*$)/i,
  //                 '&nbsp;'
  //               )
  //             } else if (lastword.length < 13 && penultword.length < 11) {
  //               // replace last breaking space with a nbsp
  //               element.innerHTML = el.innerHTML.replace(
  //                 / (?=[^ ]*$)/i,
  //                 '&nbsp;'
  //               )
  //             }
  //           }
  //         }
  //       })
  //   }
  // }
}
</script>
