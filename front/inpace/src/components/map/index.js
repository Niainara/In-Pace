import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import icon from './marker.png';


const Marker = ({ img }) => <div><img src={icon} alt="ici" width="30" heigth="40" /></div>;

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
    return (
      <div style={{ height: '400px', width: '700px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
        <Marker
          lat={50.8461317}
          lng={4.3431226}
        />
      </div>
    );
  }
}

export default SimpleMap;
