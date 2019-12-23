module.exports = {
	RelatedType: {
		SideStory: parent => {
			return parent['Side story'];
		},
		AlternativeVersion: parent => {
			return parent['Alternative version'];
		},
		SpinOff: parent => {
			return parent['Spin-off'];
		}
	}
};
