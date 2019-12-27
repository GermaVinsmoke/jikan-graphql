const { RESTDataSource } = require('apollo-datasource-rest');

class SeasonAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/season';
	}

	getSeasonDetail(year, season) {
		return this.get(`/${year}/${season}`);
	}
}

module.exports = SeasonAPI;
