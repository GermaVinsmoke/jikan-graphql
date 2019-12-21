const { gql } = require('apollo-server');

const typeDefs = gql`
	# Endpoint - /anime/{id}
	type Anime @rateLimit(limit: 30, duration: 60) {
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

		characters_staff: AnimeCharacters
		news: News
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

	# Endpoint - /anime/{id}/characters_staff
	type AnimeCharacters @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		characters: [Character]
		staff: [Staff]
	}

	type Character {
		mal_id: Int
		url: String
		image_url: String
		name: String
		role: String
		voice_actors: [VoiceActor]
	}

	type VoiceActor {
		mal_id: Int
		name: String
		url: String
		image_url: String
		language: String
	}

	type Staff {
		mal_id: Int
		url: String
		name: String
		image_url: String
		positions: [String]
	}

	# Endpoint - /anime/{id}/news
	type News @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		articles: [Article]
	}

	type Article {
		url: String
		title: String
		date: String
		author_name: String
		author_url: String
		forum_url: String
		image_url: String
		comments: Int
		intro: String
	}
`;

module.exports = typeDefs;
