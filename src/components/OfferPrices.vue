<template>
  <div class="q-card q-pa-md bordered">
    <h2>Precios</h2>
    <q-table
      :rows="prices"
      :columns="columns"
      row-key="id"
      bordered
      dense
    />
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue';
import { useOffersStore } from '../stores/offersStore';

export default defineComponent({
  name: 'OfferPrices',
  setup() {
    const store = useOffersStore();
    const prices = computed(() => store.selectedOffer?.versions[0]?.productOfferingPrices || []);
    const columns = [
      { name: 'name', label: 'Nombre Precio', align: 'left', field: row => row.versions[0]?.name },
      { name: 'amount', label: 'Monto', align: 'right', field: row => row.versions[0]?.price.amount }
    ];
    return { prices, columns };
  }
});
</script>
