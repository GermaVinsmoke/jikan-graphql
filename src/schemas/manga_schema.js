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

		characters: MangaCharacters
		news: News
		pictures: Pictures
		stats: Stats
		forum: Forum
		moreinfo: MoreInfo
		recommendations: Recommendations
	}

	type MangaCharacters @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		characters: [MangaCharacter]
	}

	type MangaCharacter implements Character {
		mal_id: Int
		url: String
		image_url: String
		name: String
		role: String
	}

	# Endpoint - /anime/{id}/reviews/{page_no}
	type MangaReviews @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		reviews: [MangaReviewList]
	}

	type MangaReviewList {
		mal_id: Int
		url: String
		helpful_count: Int
		date: String
		reviewer: MangaReviewerDetail
		content: String
	}

	type MangaReviewerDetail {
		url: String
		image_url: String
		username: String
		chapters_read: Int
		scores: MangaReviewScore
	}

	type MangaReviewScore {
		overall: Int
		story: Int
		art: Int
		character: Int
		enjoyment: Int
	}

	# Endpoint - /anime/{id}/episodes/{page_no}
	type MangaUserUpdates @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		users: [MangaUser]
	}

	type MangaUser {
		username: String
		url: String
		image_url: String
		score: Int
		status: String
		volumes_read: Int
		volumes_total: Int
		chapters_read: Int
		chapters_total: Int
		date: String
	}
`;

module.exports = typeDefs;
