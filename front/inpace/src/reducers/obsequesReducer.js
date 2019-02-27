//obsequesReducer.js
const obsequesReducer = (state = "cremation", action) => {
	switch (action.type) {
		case 'CREMATION':
			return state = "cremation";
		case 'INHUMATION':
			return state = "inhumation";
		default:
			return state;
	}
};
export default obsequesReducer;
