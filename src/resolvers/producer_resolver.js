module.exports = {
	Query: {
		producer: async (root, { producer_id, page_no }, { dataSources }) => {
			const producer = await dataSources.producerAPI.getProducerDetail(
				producer_id,
				page_no
			);
			return { ...producer };
		}
	}
};
