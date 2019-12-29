const { RESTDataSource } = require('apollo-datasource-rest');

class ProducerAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/producer';
	}

	getProducerDetail(producer_id, page_no) {
		if (page_no === undefined) page_no = '';
		return this.get(`/${producer_id}/${page_no}`);
	}
}

module.exports = ProducerAPI;
