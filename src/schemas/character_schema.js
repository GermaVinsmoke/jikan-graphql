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
		voice_actors: [VoiceActor]

		# Character requests
		# More info - https://jikan.docs.apiary.io/#reference/0/character
		pictures: Pictures
	}

	type CharacterDetail implements CharacterInterface {
		mal_id: ID
		name: String
		url: String
		image_url: String
		role: String
	}
`;

module.exports = typeDefs;
