import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// uno styles
import 'virtual:uno.css'
// state manager
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import '@unocss/reset/normalize.css'

const app = createApp(App);
const pinia = createPinia();

app.use(MotionPlugin)
app.use(pinia);

app.mount('#app');
