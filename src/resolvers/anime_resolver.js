module.exports = {
	Query: {
		anime: (_, { id }, { dataSources }) =>
			dataSources.animeAPI.getAnimeDetail({ mal_id: id })
	}
};
