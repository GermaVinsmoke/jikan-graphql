module.exports = {
	Query: {
		manga: (_, { id }, { dataSources }) =>
			dataSources.mangaAPI.getMangaDetail({ mal_id: id })
	}
};
