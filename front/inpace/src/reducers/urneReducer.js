//urneReducer.js
const urneReducer = (state = "oui", action) => {
	switch (action.type) {
		case 'URNEY':
			return state = "oui";
		case 'URNEN':
			return state = "non";
		case 'URNEIDK':
			return state = "Je ne sais pas";
		default:
			return state;
	}
};
export default urneReducer;
