const { gql } = require('apollo-server');

const typeDefs = gql`
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
		type: String
		volumes: Int
		chapters: Int
		publishing: Boolean
		published: AiredPublishedType
		rank: Int
		score: Float
		scored_by: Int
		popularity: Int
		members: Int
		favorites: Int
		synopsis: String
		background: String
		related: RelatedType
		genres: [RelatedSubType]
		authors: [RelatedSubType]
		serializations: [RelatedSubType]
	}
`;

module.exports = typeDefs;
