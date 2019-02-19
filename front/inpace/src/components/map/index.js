import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 50.8504500,
      lng: 4.3487800,
    },
    zoom: 13,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div style={{ height: '600px', width: '600px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default SimpleMap;
