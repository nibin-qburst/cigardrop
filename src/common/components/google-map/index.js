import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
render() {
  return (
      <div style={{width: '100%', height: '400px', position: 'relative'}}>
        <Map style={{width: '100%', height: '400px', position: 'relative'}} google={this.props.google} zoom={13}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
                  
          <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: 37.778519, lng: -122.405640}} />

          <Marker
            name={'Dolores park'}
            position={{lat: 37.759703, lng: -122.428093}} />
          <Marker />
          </Map>
          </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB-ACyAOWKAwtRdiyAOV8cIafGjaUGrGWE'
})(MapContainer)