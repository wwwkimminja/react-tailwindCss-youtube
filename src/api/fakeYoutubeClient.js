import axios from 'axios'

export default class FakeYoutubeClient {
  // eslint-disable-next-line no-useless-constructor
  constructor() { }

  async search(keyword) {
    return axios.get(`/videos/search.json`)
  }

  async videos() {
    return axios.get(`/videos/popular.json`)
  }

}

