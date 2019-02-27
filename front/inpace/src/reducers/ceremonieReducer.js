//ceremonieReducer.js
const ceremonieReducer = (state= "oui", action) => {
	switch (action.type) {
		case 'CEREMONIEY':
			return state = "oui";
		case 'CEREMONIEN':
			return state = "non";
		case 'CEREMONIEIDK':
			return state = "je ne sais pas";
		default:
			return state;
	}
};
export default ceremonieReducer;
