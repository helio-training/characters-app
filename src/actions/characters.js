import 'isomorphic-fetch';

import { CHARACTERS, CHARACTER_FILTERS } from './types';

const API_URL = 'http://localhost:4000/v1/characters';

export const createCharacter = character => {
  character.kind = character.kind || 'Mutant';

  return {
    type: CHARACTERS.CREATE_CHARACTER,
    payload: new Promise((resolve, reject) => {
      return fetch(API_URL, { method: 'POST', body: JSON.stringify(character) })
        .then(response => resolve(response.json()))
        .catch(reject);
    })
  }
};

export const updateCharacter = (id, character) => ({ type: CHARACTERS.UPDATE_CHARACTER, character });

export const deleteCharacter = id => ({ type: CHARACTERS.DELETE_CHARACTER, id });

export const filterCharacters = (kind = CHARACTER_FILTERS.ALL_CHARACTERS) => ({
  type: CHARACTERS.FILTER_CHARACTERS,
  kind,
  payload: new Promise((resolve, reject) => {
    return fetch(API_URL)
      .then(response => resolve(response.json()))
      .catch(reject);
  })
});



