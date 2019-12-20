const { gql } = require('apollo-server');

const typeDefs = gql`
	# type Query {
	# 	anime(id: ID!): Anime
	# }

	type Anime {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		mal_id: ID
		url: String
		image_url: String
		trailer_url: String
		title: String
		title_english: String
		title_japanese: String
		title_synonyms: [String]
		type: String
		source: String
		episodes: Int
		status: String
		airing: Boolean
		aired: AiredType
		duration: String
		rating: String
		score: Float
		scored_by: Int
		rank: Int
		popularity: Int
		members: Int
		favorites: Int
		synopsis: String
		background: String
		premiered: String
		broadcast: String
		related: RelatedType
		producers: [RelatedSubType]
		licensors: [RelatedSubType]
		studios: [RelatedSubType]
		genres: [RelatedSubType]
		opening_themes: [String]
		ending_themes: [String]
	}

	type AiredType {
		from: String
		to: String
		string: String
	}

	type RelatedType {
		Adaptation: [RelatedSubType]
		SideStory: [RelatedSubType]
		Character: [RelatedSubType]
		Summary: [RelatedSubType]
		Other: [RelatedSubType]
	}

	type RelatedSubType {
		mal_id: ID
		type: String
		name: String
		url: String
	}
`;

module.exports = typeDefs;
