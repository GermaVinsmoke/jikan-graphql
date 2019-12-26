const { gql } = require('apollo-server');

const typeDefs = gql`
	type AiredPublishedType {
		from: String
		to: String
		string: String
	}

	# Think of making it a Interface
	type RelatedType {
		Adaptation: [RelatedSubType]
		SideStory: [RelatedSubType]
		Character: [RelatedSubType]
		Summary: [RelatedSubType]
		Other: [RelatedSubType]
		AlternativeVersion: [RelatedSubType]
		SpinOff: [RelatedSubType]
	}

	type RelatedSubType {
		mal_id: ID
		type: String
		name: String
		url: String
	}

	# interface Characters {
	# 	request_hash: String
	# 	request_cached: Boolean
	# 	request_cache_expiry: Int
	# 	characters: [Character]
	# }

	interface Character {
		mal_id: Int
		url: String
		image_url: String
		name: String
		role: String
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

	# Endpoint - /anime/{id}/stats
	type Stats @rateLimit(limit: 30, duration: 60) {
		request_hash: String
		request_cached: Boolean
		request_cache_expiry: Int
		watching: Int
		reading: Int
		completed: Int
		on_hold: Int
		dropped: Int
		plan_to_watch: Int
		plan_to_read: Int
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
`;

module.exports = typeDefs;
