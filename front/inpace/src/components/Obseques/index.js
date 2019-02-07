import React from 'react';
import HeaderObs from './Choice/index';
import ChoiceObs from './HeaderObs/index';
import Toolbar from '../Toolbar/toolbar';

class Obseques extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <ChoiceObs />
        <HeaderObs />
      </React.Fragment>
    );
  }
}

export default Obseques;
