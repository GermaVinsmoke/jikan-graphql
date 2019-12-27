module.exports = {
	Query: {
		season: async (root, { year, season }, { dataSources }) => {
			const seasonData = await dataSources.seasonAPI.getSeasonDetail(
				year,
				season
			);
			return { ...seasonData };
		}
	}
};
