import { defineStore } from 'pinia';
import offersData from '../assets/ofertas.json';

export const useOffersStore = defineStore('offers', {
  state: () => ({
    offers: offersData || [], // 🔹 Evita errores si `offersData` es `undefined`
    selectedOffer: null
  }),
  actions: {
    selectOffer(offerId) {
      this.selectedOffer = this.offers.find(o => o.id === offerId) || null;
    }
  }
});
