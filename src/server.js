const { ApolloServer } = require('apollo-server');

const schema = require('./root_query');

const AnimeAPI = require('./datasources/anime');
const MangaAPI = require('./datasources/manga');
const PersonAPI = require('./datasources/person');
const CharacterAPI = require('./datasources/character');
const SeasonAPI = require('./datasources/season');
const SeasonDetailAPI = require('./datasources/season_detail');

const server = new ApolloServer({
	schema,
	dataSources: () => ({
		animeAPI: new AnimeAPI(),
		mangaAPI: new MangaAPI(),
		personAPI: new PersonAPI(),
		characterAPI: new CharacterAPI(),
		seasonAPI: new SeasonAPI(),
		seasonDetailAPI: new SeasonDetailAPI()
	})
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
