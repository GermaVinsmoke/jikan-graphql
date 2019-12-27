module.exports = {
	Query: {
		schedule: async (root, { day }, { dataSources }) => {
			const schedule = await dataSources.scheduleAPI.getScheduleDetail(day);
			return { ...schedule };
		}
	}
};
