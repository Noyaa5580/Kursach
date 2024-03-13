import { createApp } from 'vue'
import App from './App.vue'
import { createYmaps } from 'vue-yandex-maps';
import router from './router'

const app = createApp(App);

const ymaps = createYmaps({
    apikey: '05f02f8e-303d-44eb-988d-0d0abbe08436',
});


app.use(ymaps);
createApp(App).use(router).mount('#app')

