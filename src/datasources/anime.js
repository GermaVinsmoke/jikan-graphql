const { RESTDataSource } = require('apollo-datasource-rest');

class AnimeAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/anime';
	}

	getAnimeDetail(mal_id) {
		return this.get(`/${mal_id}`);
	}

	getCharacterStaff(mal_id) {
		return this.get(`/${mal_id}/characters_staff`);
	}

	getNews(mal_id) {
		return this.get(`/${mal_id}/news`);
	}
}

module.exports = AnimeAPI;
