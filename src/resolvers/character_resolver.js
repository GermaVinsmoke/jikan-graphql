module.exports = {
	Query: {
		character: async (root, { id }, { dataSources }) => {
			const character = await dataSources.characterAPI.getCharacterDetail(id);
			return { ...character, id };
		},
		pictures: async (root, { id }, { dataSources }) => {
			const pictures = await dataSources.characterAPI.getPictures(id);
			return { ...pictures };
		}
	},
	Character: {
		pictures: async (character, { id }, { dataSources }) => {
			const pictures = await dataSources.characterAPI.getPictures(character.id);
			return { ...pictures };
		}
	}
};
