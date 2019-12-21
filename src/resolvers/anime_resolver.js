module.exports = {
	Query: {
		anime: async (root, { id }, { dataSources }) => {
			const anime = await dataSources.animeAPI.getAnimeDetail(id);
			return { ...anime, id };
		},

		characters_staff: async (root, { id }, { dataSources }) => {
			const characters_staff = await dataSources.animeAPI.getCharacterStaff(id);
			return { ...characters_staff };
		}
	},
	Anime: {
		characters_staff: async (anime, args, { dataSources }) => {
			const characters_staff = await dataSources.animeAPI.getCharacterStaff(
				anime.id
			);
			return { ...characters_staff };
		}
	}
};
