const { gql } = require('apollo-server');

const typeDefs = gql`
	type AiredOrPublishedType {
		from: String
		to: String
		string: String
	}

	type RelatedType {
		Adaptation: [RelatedSubType]
		SideStory: [RelatedSubType]
		Character: [RelatedSubType]
		Summary: [RelatedSubType]
		Other: [RelatedSubType]
	}

	type RelatedSubType {
		mal_id: ID
		type: String
		name: String
		url: String
	}
`;

module.exports = typeDefs;
