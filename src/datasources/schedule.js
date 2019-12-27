const { RESTDataSource } = require('apollo-datasource-rest');

class ScheduleAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v3/schedule';
	}

	getScheduleDetail(day) {
		if (day === undefined) day = '';
		return this.get(`/${day}`);
	}
}

module.exports = ScheduleAPI;
