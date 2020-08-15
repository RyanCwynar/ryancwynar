// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import '~/assets/styles.css'
import 'fullpage.js/dist/fullpage.min.css'
import VueFullPage from 'vue-fullpage.js'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(VueFullPage)
  Vue.component('Layout', DefaultLayout)
}
