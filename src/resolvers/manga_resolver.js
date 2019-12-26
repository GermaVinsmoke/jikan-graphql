module.exports = {
	Query: {
		manga: async (root, { id }, { dataSources }) => {
			const manga = await dataSources.mangaAPI.getMangaDetail(id);
			return { ...manga, id };
		},
		characters: async (root, { id }, { dataSources }) => {
			const characters = await dataSources.mangaAPI.getCharacters(id);
			return { ...characters };
		},
		news: async (root, { id }, { dataSources }) => {
			const news = await dataSources.mangaAPI.getNews(id);
			return { ...news };
		},
		pictures: async (root, { id }, { dataSources }) => {
			const pictures = await dataSources.mangaAPI.getPictures(id);
			return { ...pictures };
		},
		stats: async (root, { id }, { dataSources }) => {
			const stats = await dataSources.mangaAPI.getStats(id);
			return { ...stats };
		},
		forum: async (root, { id }, { dataSources }) => {
			const forum = await dataSources.mangaAPI.getForum(id);
			return { ...forum };
		},
		moreinfo: async (root, { id }, { dataSources }) => {
			const moreinfo = await dataSources.mangaAPI.getMoreInfo(id);
			return { ...moreinfo };
		},
		recommendations: async (root, { id }, { dataSources }) => {
			const recommendations = await dataSources.mangaAPI.getRecommendation(id);
			return { ...recommendations };
		},
		mangareviews: async (root, { id, page_no }, { dataSources }) => {
			const reviews = await dataSources.mangaAPI.getReviews(id, page_no);
			return { ...reviews };
		},
		mangauserupdates: async (root, { id, page_no }, { dataSources }) => {
			const userupdates = await dataSources.mangaAPI.getUserUpdates(
				id,
				page_no
			);
			return { ...userupdates };
		}
	},
	Manga: {
		characters: async (manga, { id }, { dataSources }) => {
			const characters = await dataSources.mangaAPI.getCharacters(manga.id);
			return { ...characters };
		},
		news: async (manga, { id }, { dataSources }) => {
			const news = await dataSources.mangaAPI.getNews(manga.id);
			return { ...news };
		},
		pictures: async (manga, { id }, { dataSources }) => {
			const pictures = await dataSources.mangaAPI.getPictures(manga.id);
			return { ...pictures };
		},
		stats: async (manga, { id }, { dataSources }) => {
			const stats = await dataSources.mangaAPI.getStats(manga.id);
			return { ...stats };
		},
		forum: async (manga, { id }, { dataSources }) => {
			const forum = await dataSources.mangaAPI.getForum(manga.id);
			return { ...forum };
		},
		moreinfo: async (manga, { id }, { dataSources }) => {
			const moreinfo = await dataSources.mangaAPI.getMoreInfo(manga.id);
			return { ...moreinfo };
		},
		recommendations: async (manga, { id }, { dataSources }) => {
			const recommendations = await dataSources.mangaAPI.getRecommendation(
				manga.id
			);
			return { ...recommendations };
		}
	}
};
