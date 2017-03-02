import { CHARACTERS, CHARACTER_FILTERS } from '../actions/types';



export default (state = {}, action) => {
  switch (action.type) {
    case CHARACTERS.CREATE_CHARACTER:
      return Object.assign({}, state, { characters: [...state.characters, action.character] });
    case CHARACTERS.UPDATE_CHARACTER:
      return Object.assign({}, state, {
        characters: state.characters.map(character => {
          if (character._id === action.id) {
            return Object.assign({}, character, action.character);
          }
          return character;
        })
      });
    case CHARACTERS.DELETE_CHARACTER:
      return Object.assign({}, state, {
        characters: state.characters.filter(character => character._id !== action.id)
      });
    default:
      return state;
  }
}