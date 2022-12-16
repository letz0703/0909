import axios from 'axios';

const {VITE_YOUTUBE_API_KEY} = import.meta.env;

export default class YoutubeClient {
  constructor() {
    /**기본 URL과 key 설정 */
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {key: VITE_YOUTUBE_API_KEY},
    });
  }

	async search(params) {
		return this.httpClient.get('search', params)
	}
	async videos(params) {
		return this.httpClient.get('videos', params)
	}

  // async search(params) {
  //   return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  // }
  // async #searchByKeyword(keyword) {
  //   // axios 대신 this.httpClient
  //   return this.httpClient
  //     .get('search', {
  //       params: {
  //         part: 'snippet',
  //         maxResults: 25,
  //         type: 'video',
  //         q: keyword,
  //       },
  //     })
  //     .then(res => res.data.items)
  //     .then(items => items.map(item => ({...item, id: item.id.videoId})));
  // }
  // async #mostPopular() {
  //   return this.httpClient
  //     .get('videos', {
  //       params: {
  //         part: 'snippet',
  //         chart: 'mostPopular',
  //         maxResults: 25,
  //       },
  //     })
  //     .then(res => res.data.items);
  // }
}
