const { gql } = require('apollo-server');

const typeDefs = gql`
	type Club @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		mal_id: Int
		url: String
		image_url: String
		title: String
		members_count: Int
		pictures_count: Int
		category: String
		created: String
		type: String
		staff: [RelatedSubType]
		anime_relations: [RelatedSubType]
		manga_relations: [RelatedSubType]
		character_relations: [RelatedSubType]
	}

	type Members @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		members: [Member]
	}

	type Member {
		username: String
		url: String
		image_url: String
	}
`;

module.exports = typeDefs;
