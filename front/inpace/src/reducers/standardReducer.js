//standardReducer.js
const standardReducer = (state = "", action) => {
	if (action.type === "STANDARD"){
		return action.payload
	}
	return state;
}
export default standardReducer;
