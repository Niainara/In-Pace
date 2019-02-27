import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { withRouter } from 'react-router-dom';


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 50.8461317,
      lng: 4.3431226,
    },
    zoom: 13,
  };

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
          />
        </div>
      );
    }
    return (
      <div style={{ height: '300px', width: '300px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAIC3DzbTFNDNRgpILUOEijTSeSET7jiYg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default withRouter(SimpleMap);
