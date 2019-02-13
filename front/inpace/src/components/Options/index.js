import React from 'react';
import HeaderOptions from './Header-options/index';
import ChoiceOptions from './Choice-options/index';
import Toolbar from '../Toolbar/toolbar';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <HeaderOptions />
        <ChoiceOptions />
      </React.Fragment>
    );
  }
}

export default Options;
