import React from 'react';
import {StyleSheet, Text, View}from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import getMarkers from './helpers/getMarkers.js';

class PKMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: []
    }
    this.loadMarkers = this.loadMarkers.bind(this);
  }
  loadMarkers() {
    getMarkers().then(data => {
      this.setState({
        markers: data
      })
    });
  }

  componentDidMount() {
    this.loadMarkers();
  }

  render() {
    return (
    <MapView
      style={{flex: 1}}
      // region={{latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
      showsUserLocation={true}>
        {this.state.markers.map((spot, index) => <Marker
            coordinate={{latitude: spot.lat, longitude: spot.lng}}
            title={spot.name}
            description={spot.description}>
              <Callout>
                <View>
                  <Text>{spot.name}</Text>
                  <Text>{spot.description}</Text>
                </View>
              </Callout>
            </Marker>)}
    </MapView>
    )
  }
}

export default PKMap;