import React from 'react';
import DetailHeader from './BasicInfos/index';
import Toolbar from '../Toolbar/toolbar';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <DetailHeader />
      </React.Fragment>
    );
  }
}

export default Detail;
