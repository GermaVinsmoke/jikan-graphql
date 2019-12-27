const { RESTDataSource } = require('apollo-datasource-rest');

class SeasonDetailAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/season';
	}

	getSeasonArchiveDetail() {
		return this.get(`/archive`);
	}

	getSeasonLaterDetail() {
		return this.get(`/later`);
	}
}

module.exports = SeasonDetailAPI;
