
import React, { Component } from 'react';
import Map from './map.js';

class UserProfileList extends Component {
  state = {
    profiles: [
      { id: 1, name: 'User 1', lat: 37.7749, lng: -122.4194 }, // Example coordinates for San Francisco
      // Add more profiles with their respective coordinates
    ],
    selectedProfile: null,
  };

  handleSummaryClick = (profile) => {
    this.setState({ selectedProfile: profile });
  };

  render() {
    const { profiles, selectedProfile } = this.state;

    return (
      <div>
        <h1>User Profiles</h1>
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id}>
              {profile.name}
              <button onClick={() => this.handleSummaryClick(profile)}>Summary</button>
            </li>
          ))}
        </ul>
        {selectedProfile && (
          <div>
            <h2>Summary for {selectedProfile.name}</h2>
            <Map profiles={[selectedProfile]} />
          </div>
        )}
      </div>
    );
  }
}

export default UserProfileList;
