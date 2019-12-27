const { gql } = require('apollo-server');

const typeDefs = gql`
	type Season @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		season_name: String
		season_year: Int
		anime: [AnimeDetail]
	}

	type AnimeDetail {
		mal_id: Int
		url: String
		title: String
		image_url: String
		synopsis: String
		type: String
		airing_start: String
		episodes: Int
		members: Int
		genres: [RelatedSubType]
		source: String
		producers: [RelatedSubType]
		score: Float
		licensors: [String]
		r18: Boolean
		kids: Boolean
		continuing: Boolean
	}
`;

module.exports = typeDefs;
