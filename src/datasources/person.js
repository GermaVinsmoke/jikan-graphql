const { RESTDataSource } = require('apollo-datasource-rest');

class PersonAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/person/';
	}

	getPersonDetail(mal_id) {
		const response = this.get(`/${mal_id}`);
		return response;
	}

	getPictures(mal_id) {
		return this.get(`/${mal_id}/pictures`);
	}
}

module.exports = PersonAPI;
