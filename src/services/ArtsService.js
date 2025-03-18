import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Artwork } from "@/models/Artwork.js"
import { AppState } from "@/AppState.js"

class ArtsService {
  admireArt(artworkId) {
    throw new Error('Method not implemented.')
  }
  async getArtworks() {
    const response = await api.get('api/artworks')
    logger.log('got art', response.data)
    this.handleResponse(response)
  }
  handleResponse(response) {
    const art = response.data.artworks.map(pojo => new Artwork(pojo))
    AppState.artworks = art
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }

  async changePage(pageNum) {
    const response = await api.get(`api/artworks?page=${pageNum}`)
    logger.log("changed page", response.data)
    this.handleResponse(response)
  }
}

export const artsService = new ArtsService()
