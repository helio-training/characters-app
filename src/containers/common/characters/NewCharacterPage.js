import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { createCharacter } from '../../../actions/characters';

class NewCharacterPage extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '' };

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Bad.....
  // handleSubmit() {
  //
  // }


  // Good... Uh huhh huhhhh...
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Handled... uh huhhuh');
    this.props.createCharacter(this.state);
    browserHistory.push('/characters');
  };

  render() {
    return (
      <div>
        <h1>New Character</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input type="text"
                   name="name"
                   id="name"
                   value={this.state.name}
                   onChange={e => this.setState({ name: e.target.value })}/>
          </fieldset>
          <fieldset>
            <button type="submit">Save</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createCharacter: (character) => {
      return dispatch(createCharacter(character));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterPage);