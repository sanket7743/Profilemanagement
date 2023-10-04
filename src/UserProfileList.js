
import React, { Component } from 'react';
import Map from './Map';

class UserProfileList extends Component {
  state = {
    profiles: [
      { id: 1, name: 'User 1', lat: 37.7749, lng: -122.4194 }, // Example coordinates for San Francisco
      // Add more profiles with their respective coordinates
    ],
  };

  render() {
    return (
      <div>
        <h1>User Profiles</h1>
        <Map profiles={this.state.profiles} />
        <ul>
          {this.state.profiles.map(profile => (
            <li key={profile.id}>{profile.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserProfileList;
