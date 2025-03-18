<script setup>
import { AppState } from '@/AppState.js';
import { artsService } from '@/services/ArtsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)


async function changePage(pageNum) {
  try {
    logger.log("changing page")
    await artsService.changePage(pageNum)
  }
  catch (error) {
    Pop.error(error)
  }
}
</script>


<template>
  <div class="d-flex gap-3 align-items-center mt-2">
    <button @click="changePage(currentPage - 1)" class="btn btn-primary" type="button">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }} </span>
    <button @click="changePage(currentPage + 1)" class="btn btn-primary" type="button">Next</button>
  </div>
</template>


<style lang="scss" scoped></style>