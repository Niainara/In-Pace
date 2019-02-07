const defaultState = ['No choice yet'];

const choiceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PREMIER':
      return state === 'premier';
    case 'DEUXIEME':
      return state === 'deuxieme';
    case 'TROISIEME':
      return state === 'troisieme';
    default:
      return defaultState;
  }
};

export default choiceReducer;
