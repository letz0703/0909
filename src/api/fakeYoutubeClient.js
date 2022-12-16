import axios from 'axios';

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "search" : "popular"}.json`)
//     .then(res => res.data.items)
// }

export default class FakeYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  }
  async videos() {
    return axios.get('/videos/popular.json');
  }
  //   async search(keyword) {
  //     return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
  //     // return axios
  //     //   .get(`/videos/${keyword ? "search" : "popular"}.json`)
  //     //   .then(res => res.data.items)
  //   }
  //   async #searchByKeyword() {
  //     return axios
  //       .get(`/videos/search.json`)
  //       .then(res => res.data.items)
  //       .then(items => items.map(item => ({...item, id: item.id.videoId})))
  //   }
  //   async #mostPopular() {
  //     return axios
  //       .get(`/videos/popular.json`)
  //       .then(res => res.data.items)
  //   }
}
