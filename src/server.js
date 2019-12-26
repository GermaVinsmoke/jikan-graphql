const { ApolloServer } = require('apollo-server');

const schema = require('./root_query');

const AnimeAPI = require('./datasources/anime');
const MangaAPI = require('./datasources/manga');
const PersonAPI = require('./datasources/person');
const CharacterAPI = require('./datasources/character');

const server = new ApolloServer({
	schema,
	dataSources: () => ({
		animeAPI: new AnimeAPI(),
		mangaAPI: new MangaAPI(),
		personAPI: new PersonAPI(),
		characterAPI: new CharacterAPI()
	})
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
