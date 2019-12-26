const { gql } = require('apollo-server');

const typeDefs = gql`
	type Person @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		mal_id: ID
		url: String
		image_url: String
		website_url: String
		name: String
		given_name: String
		family_name: String
		alternate_names: [String]
		birthday: String
		member_favorites: Int
		about: String
		voice_acting_roles: [VoiceActingRoles]
		anime_staff_positions: [AnimeStaffPositions]
		published_manga: [PublishedManga]

		pictures: Pictures
	}

	type VoiceActingRoles {
		role: String
		anime: PersonDetailType
		character: PersonDetailType
	}

	type AnimeStaffPositions {
		position: String
		anime: PersonDetailType
	}

	type PublishedManga {
		position: String
		manga: PersonDetailType
	}

	type PersonDetailType {
		mal_id: Int
		url: String
		image_url: String
		name: String
	}
`;

module.exports = typeDefs;
