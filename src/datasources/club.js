const { RESTDataSource } = require('apollo-datasource-rest');

class ClubAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/club';
	}

	getClubDetail(club_id) {
		return this.get(`/${club_id}`);
	}

	getMembers(club_id, page_no) {
		if (page_no === undefined) page_no = '';
		return this.get(`/${club_id}/members/${page_no}`);
	}
}

module.exports = ClubAPI;
