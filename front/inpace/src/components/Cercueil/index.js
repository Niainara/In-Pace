import React from 'react';
import ChoiceCercueil from './Choice-cercueil/index';
import HeaderCercueil from './Header-cercueil/index';
import Toolbar from '../Toolbar/toolbar';

class Cercueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <HeaderCercueil />
        <ChoiceCercueil />
      </React.Fragment>
    );
  }
}

export default Cercueil;
