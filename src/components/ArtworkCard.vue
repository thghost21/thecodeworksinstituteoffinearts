<script setup>
import { Artwork } from '@/models/Artwork.js';
import { artsService } from '@/services/ArtsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
defineProps({
  artworkProp: { type: Artwork, required: true }

})

async function admireArt(artworkId) {
  try {
    logger.log('admiring art with the Id of ')
    await artsService.admireArt(artworkId)
  }
  catch (error) {
    Pop.error(error);
  }

}

</script>


<template>
  <div class="bg-dark p-3 my-2 pictureFrame">
    <img :src="artworkProp.img" :alt="artworkProp.alt" class="img-fluid">
    <div>
      <span @click="admireArt(artworkProp.id)" type="button" class="mdi mdi-thumb-up text-light"> {{
        }}</span>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.pictureFrame {
  background-image: url("https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvb2R8ZW58MHx8MHx8fDA%3D");
  background-position: center;
  background-size: cover;
}
</style>