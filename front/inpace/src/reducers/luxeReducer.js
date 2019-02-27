//luxeReducer.js
const luxeReducer = (state = "", action) => {
	if (action.type === "LUXE"){
		return action.payload;
	}
	return state;
}
export default luxeReducer;
