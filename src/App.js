import React, { Component } from 'react';
import theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AppBar, Drawer, MenuItem } from 'material-ui';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="App">
          <AppBar title="Characters" onLeftIconButtonTouchTap={e => this.setState({ open: !this.open })}/>
          <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>
            <MenuItem onTouchTap={this.handleClose}>Item 1</MenuItem>
          </Drawer>
          <section>
            {this.props.children}
          </section>
          <footer>
            Test
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
