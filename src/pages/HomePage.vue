<script setup>
import { AppState } from '@/AppState.js';
import ArtworkCard from '@/components/ArtworkCard.vue';
import PageNav from '@/components/PageNav.vue';
import { artsService } from '@/services/ArtsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

onMounted(() => {
  getArtworks()
})

const artworks = computed(() => AppState.artworks)

async function getArtworks() {
  try {
    logger.log('getting art')
    await artsService.getArtworks()
  }
  catch (error) {
    Pop.error(error)

  }
}

</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <PageNav />
      </div>
    </div>
    <div class="row align-items-center">
      <div v-for="artwork in artworks" :key="artwork.id" class="col-md-4">
        <ArtworkCard :artworkProp="artwork" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <PageNav />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
