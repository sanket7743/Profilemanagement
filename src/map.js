
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const { profiles } = this.props;
    return(
        <Map
        google={this.props.google}
        zoom={8}
        initialCentre={{lat: 37.7749, lng: -122.4194}}
>
    let mapCenter;
    let markers;

    if (profiles.length ==1 {
      
      mapCenter = { lat: profiles[0].lat, lng: profiles[0].lng };
      markers = profiles.map((profile) => (
        <Marker
          key={profile.id}
          position={{ lat: profile.lat, lng: profile.lng }}
          title={profile.name}
        />
      ));
    } else {
      
      mapCenter = null; 
      markers = profiles.map((profile) => (
        <Marker
          key={profile.id}
          position={{ lat: profile.lat, lng: profile.lng }}
          title={profile.name}
        />
        
      ));
    }

    return (
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={mapCenter}
      >
        {markers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAxi4pCv5yJOyxUST0bgDZoSf_c2A8ji_E',
})(MapContainer);
