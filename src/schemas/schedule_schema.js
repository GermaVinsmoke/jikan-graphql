const { gql } = require('apollo-server');

const typeDefs = gql`
	type Schedule @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		monday: [AnimeDetail]
		tuesday: [AnimeDetail]
		wednesday: [AnimeDetail]
		thursday: [AnimeDetail]
		friday: [AnimeDetail]
		saturday: [AnimeDetail]
		sunday: [AnimeDetail]
	}
`;

module.exports = typeDefs;
