module.exports = {
	Query: {
		person: async (root, { id }, { dataSources }) => {
			const person = await dataSources.personAPI.getPersonDetail(id);
			return { ...person, id };
		},
		pictures: async (root, { id }, { dataSources }) => {
			const pictures = await dataSources.personAPI.getPictures(id);
			return { ...pictures };
		}
	},
	Person: {
		pictures: async (person, { id }, { dataSources }) => {
			const pictures = await dataSources.personAPI.getPictures(person.id);
			return { ...pictures };
		}
	}
};
