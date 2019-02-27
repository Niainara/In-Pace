// cercueilReducer.js
const cercueilReducer = (state = 'cercueil-sobre', action) => {
  switch (action.type) {
    case 'CERCUEILSOBRE':
      return state = "cercueil-sobre";
    case 'CERCUEILSTANDARD':
      return state = "cercueil-standard";
    case 'CERCUEILLUXE':
      return state = "cercueil-luxe";
    default:
      return state;
  }
};
export default cercueilReducer;
