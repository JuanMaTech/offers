<template>
  <div class="q-card q-pa-md bordered">
    <q-select
      v-model="selected"
      :options="offerOptions"
      label="Oferta"
      @update:model-value="updateOffer"
      class="q-mb-md bordered"
    />
    <div class="q-pa-md bordered">
      <p><strong>ID Oferta:</strong>
        <q-input :model-value="offer?.id || ''" outlined dense readonly />
      </p>
      <p><strong>Nombre:</strong>
        <q-input :model-value="offer?.versions?.[0]?.name || ''" outlined dense readonly />
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useOffersStore } from '../stores/offersStore';

export default defineComponent({
  name: 'OfferDetails',
  setup() {
    const store = useOffersStore();
    const selected = ref(null);
    const offerOptions = computed(() =>
      store.offers.map(o => ({ label: o.versions?.[0]?.name || 'Sin Nombre', value: o.id }))
    );

    const updateOffer = (value) => {
      store.selectOffer(value);
    };

    return {
      selected,
      offerOptions,
      updateOffer,
      offer: computed(() => store.selectedOffer || {})
    };
  }
});
</script>
