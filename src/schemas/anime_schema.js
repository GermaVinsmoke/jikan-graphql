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
		aired: AiredPublishedType
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
		pictures: Pictures
		videos: Videos
		stats: Stats
		forum: Forum
		moreinfo: MoreInfo
		recommendations: Recommendations
	}

	# Endpoint - /anime/{id}/characters_staff
	type AnimeCharacters @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		characters: [AnimeCharacter]
		staff: [Staff]
	}

	type AnimeCharacter implements CharacterInterface {
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

	# Endpoint - /anime/{id}/videos
	type Videos @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		promo: [Promo]
		episodes: [VideoEpisode]
	}

	type Promo {
		title: String
		image_url: String
		video_url: String
	}

	type VideoEpisode {
		title: String
		episode: String
		url: String
		image_url: String
	}

	# Endpoint - /anime/{id}/episodes/{page_no}
	type Episodes @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		episodes_last_page: Int
		episodes: [Episode]
	}

	type Episode {
		episode_id: Int
		title: String
		title_japanese: String
		title_romanji: String
		aired: String
		filler: Boolean
		recap: Boolean
		video_url: String
		forum_url: String
	}

	# Endpoint - /anime/{id}/reviews/{page_no}
	type AnimeReviews @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		reviews: [AnimeReviewList]
	}

	type AnimeReviewList {
		mal_id: Int
		url: String
		helpful_count: Int
		date: String
		reviewer: AnimeReviewerDetail
		content: String
	}

	type AnimeReviewerDetail {
		url: String
		image_url: String
		username: String
		episodes_seen: Int
		chapters_read: Int
		scores: AnimeReviewScore
	}

	type AnimeReviewScore {
		overall: Int
		story: Int
		art: Int
		animation: Int
		sound: Int
		character: Int
		enjoyment: Int
	}

	# Endpoint - /anime/{id}/episodes/{page_no}
	type AnimeUserUpdates @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		users: [AnimeUser]
	}

	type AnimeUser {
		username: String
		url: String
		image_url: String
		score: Int
		status: String
		episodes_seen: Int
		date: String
	}
`;

module.exports = typeDefs;
