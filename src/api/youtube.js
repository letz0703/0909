import axios from "axios"

const { VITE_YOUTUBE_API_KEY } = import.meta.env
export default class Youtube {
	constructor (apiClient) {
		/**기본 URL과 key 설정 */
		this.apiClient =apiClient
		// this.httpClient = axios.create({
		// 	baseURL: 'https://www.googleapis.com/youtube/v3',
		// 	params: {key: VITE_YOUTUBE_API_KEY}
		// })
	}
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
  }

	async channelImageURL(id) {
		return this.apiClient.channels({params: {part: 'snippet', id}})
		.then(res => res.data.items[0].snippet.thumbnails.default.url)
	}

	async relatedVideos(id) {
		return this.apiClient.search({
			params: {
				part: 'snippet',
				maxResult: 25,
				type: 'video',
				relatedToVideoId: id
			}
		}).then(res => res.data.items.map(item => ({...item, id: item.id.videoId})))
	}

  async #searchByKeyword(keyword) {
		// axios 대신 this.httpClient
    return this.apiClient
			.search({
				params: {
					part: 'snippet',
					maxResults: 25,
					type: 'video',
					q: keyword,
			}})
      .then(res => res.data.items)
      .then(items => items.map(item => ({...item, id: item.id.videoId})))
  }
  async #mostPopular() {
    return this.apiClient.videos({
				params: {
					part: 'snippet',
					chart: 'mostPopular',
					maxResults: 25,
			}
		})
		.then(res => res.data.items)
  }
}
