export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CHARACTER':
      return [...state, Object.assign({}, action.character)];
    default:
      return state;
  }
}