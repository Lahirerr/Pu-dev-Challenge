import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import Papa from 'papaparse';


const app = createApp(App)


app.use(Papa)

createApp(App).mount('#app')
