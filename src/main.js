import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// import VueFirestore from 'vue-firestore';
import 'animate.css';

const app = createApp(App);
app.use(router);
//  app.use(VueFirestore);
app.mount('#app'); 



