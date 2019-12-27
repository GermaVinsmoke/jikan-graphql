const { gql } = require('apollo-server');

const typeDefs = gql`
	type TopAnime @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		top: [TopAnimeDetail]
	}

	type TopAnimeDetail {
		mal_id: Int
		rank: Int
		title: String
		url: String
		image_url: String
		type: String
		episodes: Int
		start_date: String
		end_date: String
		members: Int
		score: Float
	}

	type TopManga @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		top: [TopMangaDetail]
	}

	type TopMangaDetail {
		mal_id: Int
		rank: Int
		title: String
		url: String
		type: String
		volumes: Int
		start_date: String
		end_date: String
		members: Int
		score: Float
		image_url: String
	}

	type TopPerson @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		top: [TopPersonDetail]
	}

	type TopPersonDetail {
		mal_id: Int
		rank: Int
		title: String
		url: String
		name_kanji: String
		favorites: Int
		image_url: String
		birthday: String
	}

	type TopCharacter @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		top: [TopCharacterDetail]
	}

	type TopCharacterDetail {
		mal_id: Int
		rank: Int
		title: String
		url: String
		name_kanji: String
		animeography: [RelatedSubType]
		mangaography: [RelatedSubType]
		favorites: Int
		image_url: String
	}
`;

module.exports = typeDefs;
