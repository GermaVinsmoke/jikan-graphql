const graphql = require('graphql');
const fetch = require('node-fetch');
// const handleApiErrors = require('./api-errors.js');

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLList,
	GraphQLFloat
} = graphql;

const AnimeType = new GraphQLObjectType({
	name: 'Anime',
	fields: () => ({
		request_hash: { type: GraphQLString },
		request_cached: { type: GraphQLBoolean },
		request_cache_expiry: { type: GraphQLInt },
		mal_id: { type: GraphQLID },
		url: { type: GraphQLString },
		image_url: { type: GraphQLString },
		trailer_url: { type: GraphQLString },
		title: { type: GraphQLString },
		title_english: { type: GraphQLString },
		title_japanese: { type: GraphQLString },
		title_synonyms: { type: new GraphQLList(GraphQLString) },
		type: { type: GraphQLString },
		source: { type: GraphQLString },
		episodes: { type: GraphQLInt },
		status: { type: GraphQLString },
		airing: { type: GraphQLBoolean },
		aired: { type: AiredType },
		duration: { type: GraphQLString },
		rating: { type: GraphQLString },
		score: { type: GraphQLFloat },
		scored_by: { type: GraphQLInt },
		rank: { type: GraphQLInt },
		popularity: { type: GraphQLInt },
		members: { type: GraphQLInt },
		favorites: { type: GraphQLInt },
		synopsis: { type: GraphQLString },
		background: { type: GraphQLString },
		premiered: { type: GraphQLString },
		broadcast: { type: GraphQLString },
		related: { type: RelatedType },
		producers: { type: new GraphQLList(RelatedSubType) },
		licensors: { type: new GraphQLList(RelatedSubType) },
		studios: { type: new GraphQLList(RelatedSubType) },
		genres: { type: new GraphQLList(RelatedSubType) },
		opening_themes: { type: new GraphQLList(GraphQLString) },
		ending_themes: { type: new GraphQLList(GraphQLString) }
		// errors: { type: ErrorType }
		// status: { type: GraphQLInt },
		// type: { type: GraphQLString },
		// message: { type: GraphQLString },
		// error: { type: GraphQLString }
	})
});

const AiredType = new GraphQLObjectType({
	name: 'Aired',
	fields: () => ({
		from: { type: GraphQLString },
		to: { type: GraphQLString },
		string: { type: GraphQLString }
	})
});

const RelatedType = new GraphQLObjectType({
	name: 'Related',
	fields: () => ({
		Adaptation: { type: new GraphQLList(RelatedSubType) },
		sideStory: {
			type: new GraphQLList(RelatedSubType),
			resolve: parent => parent['Side story']
		},
		Character: { type: new GraphQLList(RelatedSubType) },
		Summary: { type: new GraphQLList(RelatedSubType) },
		alternativeVersion: {
			type: new GraphQLList(RelatedSubType),
			resolve: parent => parent['Alternative version']
		},
		Other: { type: new GraphQLList(RelatedSubType) }
	})
});

const RelatedSubType = new GraphQLObjectType({
	name: 'RelatedSubTypes',
	fields: () => ({
		mal_id: { type: GraphQLID },
		type: { type: GraphQLString },
		name: { type: GraphQLString },
		url: { type: GraphQLString }
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		anime: {
			type: AnimeType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return (
					fetch(`https://api.jikan.moe/v3/anime/${args.id}`)
						// .then(handleApiErrors)
						.then(res => res.json())
						.then(json => json)
						.catch(error => error)
				);
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
