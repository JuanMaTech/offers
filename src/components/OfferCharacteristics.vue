<template>
  <div class="q-card q-pa-md bordered">
    <h2>Características</h2>
    <q-list bordered>
      <q-item v-for="char in characteristics" :key="char.id" class="bordered">
        {{ char.versions[0]?.name }}
      </q-item>
    </q-list>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useOffersStore } from '../stores/offersStore';

export default defineComponent({
  name: 'OfferCharacteristics',
  computed: {
    characteristics() {
      return useOffersStore().selectedOffer?.versions[0]?.characteristics || [];
    }
  }
});
</script>
