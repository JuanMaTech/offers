import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import App from './App.vue';
import router from './router/routes';

console.log('✅ Creando la aplicación Vue...');
const app = createApp(App);

console.log('✅ Creando instancia de Pinia...');
const pinia = createPinia();

console.log('✅ Registrando plugins...');
app.use(pinia);
app.use(router);
app.use(Quasar);

console.log('✅ Montando la aplicación en #app...');
app.mount('#app');

// 🔹 Verificar si Pinia se está inicializando correctamente
window.__PINIA__ = pinia;
console.log('✅ Pinia inicializado:', pinia);
