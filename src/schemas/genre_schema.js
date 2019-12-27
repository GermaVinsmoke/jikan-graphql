const { gql } = require('apollo-server');

const typeDefs = gql`
	type GenreAnime @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		mal_url: RelatedSubType
		item_count: Int
		anime: [GenreAnimeDetail]
	}

	type GenreAnimeDetail {
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
	}

	type GenreManga @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		mal_url: RelatedSubType
		item_count: Int
		anime: [GenreMangaDetail]
	}

	type GenreMangaDetail {
		mal_id: Int
		url: String
		title: String
		image_url: String
		synopsis: String
		type: String
		publishing_start: String
		volumes: Int
		members: Int
		genres: [RelatedSubType]
		authors: [RelatedSubType]
		score: Float
		serialization: [String]
	}
`;

module.exports = typeDefs;
