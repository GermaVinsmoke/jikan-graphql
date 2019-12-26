module.exports = {
	Query: {
		person: async (root, { id }, { dataSources }) => {
			const person = await dataSources.personAPI.getPersonDetail(id);
			return { ...person, id };
		}
	}
};
