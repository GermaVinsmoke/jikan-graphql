const { makeExecutableSchema } = require('apollo-server');
const {
	createRateLimitTypeDef,
	createRateLimitDirective
} = require('graphql-rate-limit-directive');
const { gql } = require('apollo-server');
const _ = require('lodash');

/*
    Schemas
*/

const Anime = require('./schemas/anime_schema');
const Manga = require('./schemas/manga_schema');
const Common = require('./schemas/common_schema');

/*
    Resolvers
*/

const anime_resolver = require('./resolvers/anime_resolver');
const manga_resolver = require('./resolvers/manga_resolver');
const common_resolver = require('./resolvers/common_resolver');

const Query = gql`
	type Query {
		anime(id: ID!): Anime
		characters_staff(id: ID!): AnimeCharacters
		episodes(id: ID!, page_no: ID!): Episodes
		news(id: ID!): News
		pictures(id: ID!): Pictures
		videos(id: ID!): Videos
		stats(id: ID!): Stats
		forum(id: ID!): Forum
		moreinfo(id: ID!): MoreInfo
		animereviews(id: ID!, page_no: ID!): AnimeReviews
		recommendations(id: ID!): Recommendations
		animeuserupdates(id: ID!, page_no: ID!): AnimeUserUpdates

		manga(id: ID!): Manga
		characters(id: ID!): MangaCharacters
		mangareviews(id: ID!, page_no: ID!): MangaReviews
		mangauserupdates(id: ID!, page_no: ID!): MangaUserUpdates
	}
`;

const schema = makeExecutableSchema({
	typeDefs: [createRateLimitTypeDef(), Query, Common, Anime, Manga],
	resolvers: _.merge(common_resolver, anime_resolver, manga_resolver),
	schemaDirectives: {
		rateLimit: createRateLimitDirective()
	},
	resolverValidationOptions: {
		requireResolversForResolveType: false
	}
});

module.exports = schema;
