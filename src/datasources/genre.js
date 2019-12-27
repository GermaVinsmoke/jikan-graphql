const { RESTDataSource } = require('apollo-datasource-rest');

class GenreAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/genre';
	}

	getGenreAnime(type, genre_id, page_no) {
		if (page_no === undefined) page_no = '';
		return this.get(`/${type}/${genre_id}/${page_no}`);
	}

	getGenreManga(type, genre_id, page_no) {
		if (page_no === undefined) page_no = '';
		return this.get(`/${type}/${genre_id}/${page_no}`);
	}
}

module.exports = GenreAPI;
