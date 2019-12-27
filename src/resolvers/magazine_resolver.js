module.exports = {
	Query: {
		magazine: async (root, { magazine_id, page_no }, { dataSources }) => {
			const magazine = await dataSources.magazineAPI.getMagazineDetail(
				magazine_id,
				page_no
			);
			return { ...magazine };
		}
	}
};
