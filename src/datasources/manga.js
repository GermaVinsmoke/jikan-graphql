const { RESTDataSource } = require('apollo-datasource-rest');

class MangaAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/manga/';
	}

	getMangaDetail(mal_id) {
		const response = this.get(`/${mal_id}`);
		return response;
	}

	getCharacters(mal_id) {
		const response = this.get(`/${mal_id}/characters`);
		return response;
	}

	getNews(mal_id) {
		const response = this.get(`/${mal_id}/news`);
		return response;
	}

	getPictures(mal_id) {
		const response = this.get(`/${mal_id}/pictures`);
		return response;
	}

	getStats(mal_id) {
		const response = this.get(`/${mal_id}/stats`);
		return response;
	}

	getForum(mal_id) {
		const response = this.get(`/${mal_id}/forum`);
		return response;
	}

	getMoreInfo(mal_id) {
		const response = this.get(`/${mal_id}/moreinfo`);
		return response;
	}

	getRecommendation(mal_id) {
		const response = this.get(`/${mal_id}/recommendations`);
		return response;
	}

	getReviews(mal_id, page_no) {
		return this.get(`/${mal_id}/reviews/${page_no}`);
	}

	getUserUpdates(mal_id, page_no) {
		return this.get(`/${mal_id}/userupdates/${page_no}`);
	}
}

module.exports = MangaAPI;
