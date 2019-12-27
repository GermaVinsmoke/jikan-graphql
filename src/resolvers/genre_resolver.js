module.exports = {
	Query: {
		genreanime: async (root, { type, genre_id, page_no }, { dataSources }) => {
			const genreanime = await dataSources.genreAPI.getGenreAnime(
				type,
				genre_id,
				page_no
			);
			return { ...genreanime };
		},
		genremanga: async (root, { type, genre_id, page_no }, { dataSources }) => {
			const genremanga = await dataSources.genreAPI.getGenreManga(
				type,
				genre_id,
				page_no
			);
			return { ...genremanga };
		}
	}
};
