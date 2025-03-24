<template>
  <q-page class="q-pa-md">
    <Offer />
    <OfferCharacteristics />
    <OfferPrices />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Offer from '../components/Offer.vue';
import OfferCharacteristics from '../components/OfferCharacteristics.vue';
import OfferPrices from '../components/OfferPrices.vue';

export default defineComponent({
  name: 'HomePage',
  components: { Offer, OfferCharacteristics, OfferPrices }
});
</script>
