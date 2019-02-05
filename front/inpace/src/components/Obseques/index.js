import React from 'react';
import HeaderObs from './Header-obs/index';
import ChoiceObs from './Choice-comp-obs/index';


class Obseques extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <HeaderObs />
        <ChoiceObs />
      </React.Fragment>
    );
  }
}

export default Obseques;