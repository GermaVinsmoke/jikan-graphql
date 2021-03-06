const { ApolloServer } = require('apollo-server');

const schema = require('./root_query');

const AnimeAPI = require('./datasources/anime');
const MangaAPI = require('./datasources/manga');
const PersonAPI = require('./datasources/person');
const CharacterAPI = require('./datasources/character');
const SeasonAPI = require('./datasources/season');
const SeasonDetailAPI = require('./datasources/season_detail');
const ScheduleAPI = require('./datasources/schedule');
const TopAPI = require('./datasources/top');
const GenreAPI = require('./datasources/genre');
const ProducerAPI = require('./datasources/producer');
const MagazineAPI = require('./datasources/magazine');
const ClubAPI = require('./datasources/club');

const server = new ApolloServer({
	schema,
	dataSources: () => ({
		animeAPI: new AnimeAPI(),
		mangaAPI: new MangaAPI(),
		personAPI: new PersonAPI(),
		characterAPI: new CharacterAPI(),
		seasonAPI: new SeasonAPI(),
		seasonDetailAPI: new SeasonDetailAPI(),
		scheduleAPI: new ScheduleAPI(),
		topAPI: new TopAPI(),
		genreAPI: new GenreAPI(),
		producerAPI: new ProducerAPI(),
		magazineAPI: new MagazineAPI(),
		clubAPI: new ClubAPI()
	}),
	engine: {
		apiKey: process.env.ENGINE_API_KEY
	},
	playground: true,
	introspection: true
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
