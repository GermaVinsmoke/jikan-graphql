const { RESTDataSource } = require('apollo-datasource-rest');

class MagazineAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/magazine';
	}

	getMagazineDetail(magazine_id, page_no) {
		if (page_no === undefined) page_no = '';
		return this.get(`/${magazine_id}/${page_no}`);
	}
}

module.exports = MagazineAPI;
