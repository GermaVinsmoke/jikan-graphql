const { ApolloServer } = require('apollo-server');

const schema = require('./root_query');

const AnimeAPI = require('./datasources/anime');
const MangaAPI = require('./datasources/manga');
const PersonAPI = require('./datasources/person');
const CharacterAPI = require('./datasources/character');
const SeasonAPI = require('./datasources/season');

const server = new ApolloServer({
	schema,
	dataSources: () => ({
		animeAPI: new AnimeAPI(),
		mangaAPI: new MangaAPI(),
		personAPI: new PersonAPI(),
		characterAPI: new CharacterAPI(),
		seasonAPI: new SeasonAPI()
	})
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
