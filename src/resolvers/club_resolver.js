module.exports = {
	Query: {
		club: async (root, { club_id }, { dataSources }) => {
			const club = await dataSources.clubAPI.getClubDetail(club_id);
			return { ...club };
		},
		members: async (root, { club_id, page_no }, { dataSources }) => {
			const members = await dataSources.clubAPI.getMembers(club_id, page_no);
			return { ...members };
		}
	}
};
