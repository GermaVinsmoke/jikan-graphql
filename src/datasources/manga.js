const { RESTDataSource } = require('apollo-datasource-rest');

class MangaAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/manga/';
	}

	async getMangaDetail({ mal_id }) {
		const response = await this.get(`/${mal_id}`);
		return response;
	}
}

module.exports = MangaAPI;
