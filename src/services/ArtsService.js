import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Artwork } from "@/models/Artwork.js"
import { AppState } from "@/AppState.js"

class ArtsService {
  async getArts() {
    const response = await api.get('api/artworks')
    logger.log('got art', response.data)
    const art = response.data.artworks.map(pojo => new Artwork(pojo))
    AppState.artworks = art
    AppState.totalPages = response.data.page
    AppState.totalPages = response.data.pages
  }
}

export const artsService = new ArtsService()
