import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterCharacters } from '../../../actions/characters';

class CharactersPage extends Component {

  componentDidMount() {
    this.props.filterCharacters();
  }


  render() {
    return (
      <div>
        <h1>Characters</h1>

        <ul>
          {this.props.characters.map((character, index) => {
            return (
              <li key={index}>{character.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    filterCharacters: () => {
      return dispatch(filterCharacters());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);