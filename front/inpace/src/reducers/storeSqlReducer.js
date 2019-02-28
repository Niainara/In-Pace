//storeSqlReducer.js
const storeSqlReducer = (state = [], action) => {
	if (action.type === "SQL"){
		return [...state, ...action.payload];
	}
	return state;
}
export default storeSqlReducer;
