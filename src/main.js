import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import './style.css'
import App from './App.vue';
import store from './store';
import router from './routers';


const app = createApp(App)
app.use(router)
app.use(store)
app.use(MotionPlugin)
app.mount('#app')
