const { gql } = require('apollo-server');

const typeDefs = gql`
	type SeasonArchive @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		archive: [SeasonYearWise]
	}

	type SeasonYearWise {
		year: Int
		seasons: [String]
	}
`;

module.exports = typeDefs;
