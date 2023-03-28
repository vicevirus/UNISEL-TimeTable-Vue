import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/main.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')