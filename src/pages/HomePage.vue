<script setup>
import { AppState } from '@/AppState.js';
import { artsService } from '@/services/ArtsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

onMounted(() => {
  getArts()
})

const artworks = computed(() => AppState.artworks)

async function getArts() {
  try {
    logger.log('getting art')
    await artsService.getArts()
  }
  catch (error) {
    Pop.error(error)

  }
}

</script>

<template>
  <p>{{ artworks }}</p>
</template>

<style scoped lang="scss"></style>
