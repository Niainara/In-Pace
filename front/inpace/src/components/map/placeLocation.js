import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import marker from './marker.png';

export default class placeLocation extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div>
        {this.props.text}
        <img style={{ width: '25px', height: '40px' }} src={marker} alt="ici" />
      </div>
    );
  }
}