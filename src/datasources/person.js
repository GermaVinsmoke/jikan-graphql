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
}

module.exports = PersonAPI;
