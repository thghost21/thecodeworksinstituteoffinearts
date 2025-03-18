export class Artwork {
  constructor(data) {
    this.id = data.id
    this.img = data.imgUrls.regular
    this.description = data.description
    this.attribution = data.attribution
    this.admirers = data.admirers
  }
}
