// cercueilReducer.js
const cercueilReducer = (state = 'sobre', action) => {
  switch (action.type) {
    case 'SOBRE':
      return state = "sobre";
    case 'STANDARD':
      return state = "standard";
    case 'LUXE':
      return state = "luxe";
    default:
      return state;
  }
};
export default cercueilReducer;
