import axios from "axios"

export async function search(keyword) {
  return axios
    .get(`/items/${keyword ? "can" : "jap"}.json`)
    .then(res => res.data.items)
}

export default class FakeItems {
  // constructor() {}
  async search(keyword) {
    return keyword ? this.#searchJap(keyword) : this.#searchCan()
    // return axios
    //   .get(`/videos/${keyword ? "search" : "popular"}.json`)
    //   .then(res => res.data.items)
  }
  async #searchJap() {
    return axios
      .get(`/items/jap.json`)
      .then(res => res.data.items)
      // .then(items => items.map(item => ({...item, id: item.id.videoId})))
  }
  async #searchCan() {
    return axios
      .get(`/items/can.json`)
      .then(res => res.data.items)
  }
}
