const { RESTDataSource } = require('apollo-datasource-rest');

class AnimeAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/anime';
	}

	async getAnimeDetail(mal_id) {
		const response = await this.get(`/${mal_id}`);
		return response;
	}

	async getCharacterStaff(mal_id) {
		const response = await this.get(`/${mal_id}/characters_staff`);
		return response;
	}
}

module.exports = AnimeAPI;
