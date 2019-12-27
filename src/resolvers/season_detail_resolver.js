module.exports = {
	Query: {
		seasonarchive: async (root, args, { dataSources }) => {
			const seasonData = await dataSources.seasonDetailAPI.getSeasonArchiveDetail();
			return { ...seasonData };
		},
		seasonlater: async (root, args, { dataSources }) => {
			const seasonData = await dataSources.seasonDetailAPI.getSeasonLaterDetail();
			return { ...seasonData };
		}
	}
};
