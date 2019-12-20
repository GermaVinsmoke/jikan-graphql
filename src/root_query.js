const { makeExecutableSchema } = require('apollo-server');
const { gql } = require('apollo-server');
const _ = require('lodash');

const Anime = require('./schemas/anime_schema');
const Manga = require('./schemas/manga_schema');

const anime_resolver = require('./resolvers/anime_resolver');
const manga_resolver = require('./resolvers/manga_resolver');

const Query = gql`
	type Query {
		anime(id: ID!): Anime
		manga(id: ID!): Manga
	}
`;

// const resolvers = {};

const schema = makeExecutableSchema({
	typeDefs: [Query, Anime, Manga],
	resolvers: _.merge(anime_resolver, manga_resolver)
});

module.exports = schema;
