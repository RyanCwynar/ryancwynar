// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  if(isClient){
    const VueFullPage = require('vue-fullpage.js').default
    Vue.use(VueFullPage)
    require('fullpage.js/dist/fullpage.min.css')
  }
  Vue.component('Layout', DefaultLayout)
}
