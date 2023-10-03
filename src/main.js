import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import VuePapaParse from 'vue-papa-parse'
import Papa from 'papaparse';


const app = createApp(App)

app.use(VuePapaParse)
app.use(Papa)

createApp(App).mount('#app')
