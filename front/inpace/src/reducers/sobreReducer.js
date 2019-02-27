//sobreReducer.js
const sobreReducer = (state = "", action) => {
	if (action.type === "SOBRE"){
		return action.payload;
	}
	return state;
}
export default sobreReducer;
