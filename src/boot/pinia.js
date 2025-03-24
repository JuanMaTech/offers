import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';

export default boot(({ app }) => {
  const pinia = createPinia();
  app.use(pinia);

  window.__PINIA__ = pinia;
  console.log('Pinia inicializado:', pinia);
});
