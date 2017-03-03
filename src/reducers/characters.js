import { CHARACTERS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CHARACTERS.UPDATE_CHARACTER:
      return Object.assign([], state, state.map(character => {
        if (character._id === action.id) {
          return Object.assign({}, character, action.character);
        }
        return character;
      }));
    case CHARACTERS.DELETE_CHARACTER:
      return Object.assign([], state, [].filter(character => character._id !== action.id));
    case CHARACTERS.FILTER_CHARACTERS_FULFILLED:
      return Object.assign([], state, [...state, ...action.payload]);
    // case CHARACTERS.CREATE_CHARACTER_FULFILLED:
    //   return Object.assign([], state, [...state, action.payload]);
    default:
      return state;
  }
}