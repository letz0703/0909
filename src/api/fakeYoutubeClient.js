import axios from 'axios';

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "search" : "popular"}.json`)
//     .then(res => res.data.items)
// }

export default class FakeYoutubeClient {
  async search({params}) {
    return params.relatedToVideoId
    ?axios.get('/videos/related.json')
    :axios.get('/videos/search.json');
    // return axios.get(`/videos/${params.relatedToVideoId?'related':'search'}.json`)
  }
  async videos() {
    return axios.get('/videos/popular.json');
  }
  async channels() {
    return axios.get('/videos/channel.json');
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
