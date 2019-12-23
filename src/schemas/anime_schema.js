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

	# Endpoint - /anime/{id}/pictures
	type Pictures @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		pictures: [Picture]
	}

	type Picture {
		large: String
		small: String
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

	# Endpoint - /anime/{id}/stats
	type Stats @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		watching: Int
		completed: Int
		on_hold: Int
		dropped: Int
		plan_to_watch: Int
		total: Int

		# Left as of now Field value can not be Int
		# scores: Score
	}

	# Endpoint - /anime/{id}/forum
	type Forum @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		topics: [Topic]
	}

	type Topic {
		topic_id: ID
		url: String
		title: String
		date_posted: String
		author_name: String
		author_url: String
		replies: Int
		last_post: LastPost
	}

	type LastPost {
		url: String
		author_name: String
		author_url: String
		date_posted: String
	}

	# Endpoint - /anime/{id}/moreinfo
	type MoreInfo @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		moreinfo: String
	}

	# Endpoint - /anime/{id}/recommendations
	type Recommendations @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		recommendations: [Recommendation]
	}

	type Recommendation {
		mal_id: ID
		url: String
		image_url: String
		recommendation_url: String
		title: String
		recommendation_count: Int
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
	type Reviews @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		reviews: [ReviewList]
	}

	type ReviewList {
		mal_id: Int
		url: String
		helpful_count: Int
		date: String
		reviewer: ReviewerDetail
		content: String
	}

	type ReviewerDetail {
		url: String
		image_url: String
		username: String
		episodes_seen: String
		scores: Score
	}

	type Score {
		overall: Int
		story: Int
		animation: Int
		sound: Int
		character: Int
		enjoyment: Int
	}

	# Endpoint - /anime/{id}/episodes/{page_no}
	type UserUpdates @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		users: [User]
	}

	type User {
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
