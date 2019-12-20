const { gql } = require('apollo-server');

const typeDefs = gql`
	# type Query {
	# 	manga(id: ID!): Manga
	# }

	type Manga {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		mal_id: ID
		url: String
		title: String
		title_english: String
		title_japanese: String
		title_synonyms: [String]
		status: String
		image_url: String
	}
`;

module.exports = typeDefs;
