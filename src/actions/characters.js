import { CHARACTERS, CHARACTER_FILTERS } from './types';


export const createCharacter = character => ({ type: CHARACTERS.CREATE_CHARACTER, character });

export const updateCharacter = (id, character) => ({ type: CHARACTERS.UPDATE_CHARACTER, character });

export const deleteCharacter = id => ({ type: CHARACTERS.DELETE_CHARACTER, id });

export const filterCharacters = (kind = CHARACTER_FILTERS.ALL_CHARACTERS) => ({
  type: CHARACTERS.FILTER_CHARACTERS,
  kind
});



