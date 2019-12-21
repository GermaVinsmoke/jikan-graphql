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

	getPictures(mal_id) {
		return this.get(`/${mal_id}/pictures`);
	}

	getVideos(mal_id) {
		return this.get(`/${mal_id}/videos`);
	}

	getStats(mal_id) {
		return this.get(`/${mal_id}/stats`);
	}

	getForum(mal_id) {
		return this.get(`/${mal_id}/forum`);
	}

	getMoreInfo(mal_id) {
		return this.get(`/${mal_id}/moreinfo`);
	}

	getRecommendation(mal_id) {
		return this.get(`/${mal_id}/recommendations`);
	}
}

module.exports = AnimeAPI;
