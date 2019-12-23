const { gql } = require('apollo-server');

const typeDefs = gql`
	type AiredPublishedType {
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
		AlternativeVersion: [RelatedSubType]
		SpinOff: [RelatedSubType]
	}

	type RelatedSubType {
		mal_id: ID
		type: String
		name: String
		url: String
	}
`;

module.exports = typeDefs;
