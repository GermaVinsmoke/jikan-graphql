const { gql } = require('apollo-server');

const typeDefs = gql`
	type Character @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		mal_id: ID
		url: String
		name: String
		name_kanji: String
		nicknames: [String]
		about: String
		member_favorites: Int
		image_url: String
		animeography: [CharacterDetail]
		mangaography: [CharacterDetail]
		voice_actors: [VoiceActorDetail]

		pictures: Pictures
	}

	type CharacterDetail {
		mal_id: ID
		name: String
		url: String
		image_url: String
		role: String
	}

	type VoiceActorDetail {
		mal_id: ID
		name: String
		url: String
		image_url: String
		language: String
	}
`;

module.exports = typeDefs;
