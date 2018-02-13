import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var image =
      "http://images.hollandandbarrettimages.co.uk/promotionuploads_new/hb/atg/icons/delivery/mp_standard.png";
    return (
      <div style={{ width: "100%", height: "400px", position: "relative" }}>
        <Map
          style={{ width: "100%", height: "400px", position: "relative" }}
          google={this.props.google}
          zoom={13}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          {this.props.value.map((geolocation, i) => (
            <Marker
              key={i}
              position={{
                lat: geolocation.latitude,
                lng: geolocation.longitude
              }}
              icon={image}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB-ACyAOWKAwtRdiyAOV8cIafGjaUGrGWE"
})(MapContainer);
