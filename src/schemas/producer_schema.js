const { gql } = require('apollo-server');

const typeDefs = gql`
	type Producer @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		meta: RelatedSubType
		item_count: Int
		anime: [GenreAnimeDetail]
	}
`;

module.exports = typeDefs;
