import React from 'react';
import Header from '../Header/index';
import Choice from '../Choice-comp/index';


class PageBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Choice />
      </React.Fragment>
    );
  }
}

export default PageBase;
