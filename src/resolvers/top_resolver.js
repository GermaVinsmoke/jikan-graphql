module.exports = {
	Query: {
		topanime: async (root, { type, page_no, subtype }, { dataSources }) => {
			const topanime = await dataSources.topAPI.getTopAnime(
				type,
				page_no,
				subtype
			);
			return { ...topanime };
		},
		topmanga: async (root, { type, page_no, subtype }, { dataSources }) => {
			const topmanga = await dataSources.topAPI.getTopManga(
				type,
				page_no,
				subtype
			);
			return { ...topmanga };
		},
		topperson: async (root, { type, page_no }, { dataSources }) => {
			const topperson = await dataSources.topAPI.getTopPerson(type, page_no);
			return { ...topperson };
		},
		topcharacter: async (root, { type, page_no }, { dataSources }) => {
			const topcharacter = await dataSources.topAPI.getTopCharacter(
				type,
				page_no
			);
			return { ...topcharacter };
		}
	}
};
