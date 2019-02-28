import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMapReact from 'google-map-react';
import { withRouter } from 'react-router-dom';
import PlaceLocation from './placeLocation';

class SimpleMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    locationPlace: PropTypes.any
  };

  static defaultProps = {
    center: {
      lat: 50.8461317,
      lng: 4.3431226,
    },
    zoom: 13,
    locationPlace: {lat:50.8477, lng:4.358100000000036}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.location.pathname === '/detail') {
      return (
        <div style={{ height: '400px', width: '700px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAIC3DzbTFNDNRgpILUOEijTSeSET7jiYg' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          <PlaceLocation {...this.props.locationPlace} />
          </GoogleMapReact>
        </div>
      );
    }
    if (this.props.location.pathname === '/resultats') {
      return (
        <div style={{ height: '300px', width: '400px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <PlaceLocation {...this.props.locationPlace} text={'B'} />
          </GoogleMapReact>
        </div>
      );
    }
    return (
      <div style={{ height: '300px', width: '700px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default withRouter(SimpleMap);
