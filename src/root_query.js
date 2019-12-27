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
const Person = require('./schemas/person_schema');
const Character = require('./schemas/character_schema');
const Season = require('./schemas/season_schema');
const SeasonDetail = require('./schemas/season_detail_schema');
const Schedule = require('./schemas/schedule_schema');
const Top = require('./schemas/top_schema');
const Genre = require('./schemas/genre_schema');
const Producer = require('./schemas/producer_schema');

/*
    Resolvers
*/

const anime_resolver = require('./resolvers/anime_resolver');
const manga_resolver = require('./resolvers/manga_resolver');
const common_resolver = require('./resolvers/common_resolver');
const person_resolver = require('./resolvers/person_resolver');
const character_resolver = require('./resolvers/character_resolver');
const season_resolver = require('./resolvers/season_resolver');
const season_detail_resolver = require('./resolvers/season_detail_resolver');
const schedule_resolver = require('./resolvers/schedule_resolver');
const top_resolver = require('./resolvers/top_resolver');
const genre_resolver = require('./resolvers/genre_resolver');
const producer_resolver = require('./resolvers/producer_resolver');

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
		mangacharacters(id: ID!): MangaCharacters
		mangareviews(id: ID!, page_no: ID!): MangaReviews
		mangauserupdates(id: ID!, page_no: ID!): MangaUserUpdates

		person(id: ID!): Person

		character(id: ID!): Character

		season(year: Int!, season: String!): Season

		seasonarchive: SeasonArchive
		seasonlater: Season

		schedule(day: String): Schedule

		topanime(type: String!, page_no: ID, subtype: String): TopAnime
		topmanga(type: String!, page_no: ID, subtype: String): TopManga
		topperson(type: String!, page_no: ID): TopPerson
		topcharacter(type: String!, page_no: ID): TopCharacter

		genreanime(type: String!, genre_id: ID!, page_no: ID): GenreAnime
		genremanga(type: String!, genre_id: ID!, page_no: ID): GenreManga

		producer(producer_id: ID!, page_no: ID!): Producer
	}
`;

const schema = makeExecutableSchema({
	typeDefs: [
		createRateLimitTypeDef(),
		Query,
		Common,
		Anime,
		Manga,
		Person,
		Character,
		Season,
		SeasonDetail,
		Schedule,
		Top,
		Genre,
		Producer
	],
	resolvers: _.merge(
		common_resolver,
		anime_resolver,
		manga_resolver,
		person_resolver,
		character_resolver,
		season_resolver,
		season_detail_resolver,
		schedule_resolver,
		top_resolver,
		genre_resolver,
		producer_resolver
	),
	schemaDirectives: {
		rateLimit: createRateLimitDirective()
	},
	resolverValidationOptions: {
		requireResolversForResolveType: false
	}
});

module.exports = schema;
