module.exports = {
	Query: {
		anime: async (root, { id }, { dataSources }) => {
			const anime = await dataSources.animeAPI.getAnimeDetail(id);
			return { ...anime, id };
		},

		characters_staff: async (root, { id }, { dataSources }) => {
			const characters_staff = await dataSources.animeAPI.getCharacterStaff(id);
			return { ...characters_staff };
		},

		episodes: async (root, { id, page_no }, { dataSources }) => {
			const episodes = await dataSources.animeAPI.getEpisodes(id, page_no);
			return { ...episodes };
		},

		news: async (root, { id }, { dataSources }) => {
			const news = await dataSources.animeAPI.getNews(id);
			return { ...news };
		},

		pictures: async (root, { id }, { dataSources }) => {
			const pictures = await dataSources.animeAPI.getPictures(id);
			return { ...pictures };
		},

		videos: async (root, { id }, { dataSources }) => {
			const videos = await dataSources.animeAPI.getVideos(id);
			return { ...videos };
		},

		stats: async (root, { id }, { dataSources }) => {
			const stats = await dataSources.animeAPI.getStats(id);
			return { ...stats };
		},

		forum: async (root, { id }, { dataSources }) => {
			const forum = await dataSources.animeAPI.getForum(id);
			return { ...forum };
		},

		moreinfo: async (root, { id }, { dataSources }) => {
			const moreinfo = await dataSources.animeAPI.getMoreInfo(id);
			return { ...moreinfo };
		},

		reviews: async (root, { id, page_no }, { dataSources }) => {
			const reviews = await dataSources.animeAPI.getReviews(id, page_no);
			return { ...reviews };
		},

		recommendations: async (root, { id }, { dataSources }) => {
			const recommendations = await dataSources.animeAPI.getRecommendation(id);
			return { ...recommendations };
		},

		userupdates: async (root, { id, page_no }, { dataSources }) => {
			const userupdates = await dataSources.animeAPI.getUserUpdates(
				id,
				page_no
			);
			return { ...userupdates };
		}
	},
	Anime: {
		characters_staff: async (anime, args, { dataSources }) => {
			const characters_staff = await dataSources.animeAPI.getCharacterStaff(
				anime.id
			);
			return { ...characters_staff };
		},
		news: async (anime, args, { dataSources }) => {
			const news = await dataSources.animeAPI.getNews(anime.id);
			return { ...news };
		},
		pictures: async (anime, args, { dataSources }) => {
			const pictures = await dataSources.animeAPI.getPictures(anime.id);
			return { ...pictures };
		},
		videos: async (anime, args, { dataSources }) => {
			const videos = await dataSources.animeAPI.getVideos(anime.id);
			return { ...videos };
		},
		stats: async (anime, args, { dataSources }) => {
			const stats = await dataSources.animeAPI.getStats(anime.id);
			return { ...stats };
		},
		forum: async (anime, args, { dataSources }) => {
			const forum = await dataSources.animeAPI.getForum(anime.id);
			return { ...forum };
		},
		moreinfo: async (anime, args, { dataSources }) => {
			const moreinfo = await dataSources.animeAPI.getMoreInfo(anime.id);
			return { ...moreinfo };
		},
		recommendations: async (anime, args, { dataSources }) => {
			const recommendations = await dataSources.animeAPI.getRecommendation(
				anime.id
			);
			return { ...recommendations };
		}
	}
};
