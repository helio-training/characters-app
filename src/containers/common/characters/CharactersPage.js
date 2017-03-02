import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharactersPage extends Component {

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
    characters: state.characters.characters
  }
};


export default connect(mapStateToProps)(CharactersPage);