const { RESTDataSource } = require('apollo-datasource-rest');

class TopAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/top';
	}

	getTopAnime(type, page_no, subtype) {
		if (page_no === undefined) page_no = '';
		if (subtype === undefined) subtype = '';
		return this.get(`/${type}/${page_no}/${subtype}`);
	}

	getTopManga(type, page_no, subtype) {
		if (page_no === undefined) page_no = '';
		if (subtype === undefined) subtype = '';
		return this.get(`/${type}/${page_no}/${subtype}`);
	}

	getTopPerson(type, page_no) {
		if (page_no === undefined) page_no = '';
		return this.get(`/${type}/${page_no}`);
	}

	getTopCharacter(type, page_no) {
		if (page_no === undefined) page_no = '';
		return this.get(`/${type}/${page_no}`);
	}
}

module.exports = TopAPI;
