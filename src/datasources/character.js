const { RESTDataSource } = require('apollo-datasource-rest');

class CharacterAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/character';
	}

	getCharacterDetail(mal_id) {
		return this.get(`/${mal_id}`);
	}

	getPictures(mal_id) {
		return this.get(`/${mal_id}/pictures`);
	}
}

module.exports = CharacterAPI;
