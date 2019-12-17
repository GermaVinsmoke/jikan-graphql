const handleApiErrors = async response => {
	if (!response.ok) {
		let data = await response.json();
		throw data;
	}
	return response;
};

module.exports = handleApiErrors;
