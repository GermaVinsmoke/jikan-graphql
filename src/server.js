const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const _ = require('lodash');

const schema = require('./root_query');

// const anime_schema = require('./schemas/anime_schema');
// const manga_schema = require('./schemas/manga_schema');

// const anime_resolver = require('./resolvers/anime_resolver');
// const manga_resolver = require('./resolvers/manga_resolver');

const AnimeAPI = require('./datasources/anime');
const MangaAPI = require('./datasources/manga');

// const schema = makeExecutableSchema({
// 	typeDefs: [anime_schema, manga_schema],
// 	resolvers: _.merge(anime_resolver, manga_resolver)
// });

const server = new ApolloServer({
	schema,
	dataSources: () => ({
		animeAPI: new AnimeAPI(),
		mangaAPI: new MangaAPI()
	})
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
