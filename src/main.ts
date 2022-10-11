import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import draggable from 'vuedraggable'

createApp(App)
    .use(router)
    // .use(draggable)
    .mount('#app')
