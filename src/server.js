const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const _ = require('lodash');

const schema = require('./root_query');

const AnimeAPI = require('./datasources/anime');
const MangaAPI = require('./datasources/manga');

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
