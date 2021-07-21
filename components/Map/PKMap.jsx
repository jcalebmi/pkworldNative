import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
      showsUserLocation={true}
      followUserLocation={true}>
        {this.state.markers.map((spot, index) => <Marker
            key={index}
            coordinate={{latitude: spot.lat, longitude: spot.lng}}
            >
              <Callout style={styles.callout}>
                <View style={styles.container}>
                  <Text style={styles.name}>{spot.name}</Text>
                  <Text style={styles.address}>{spot.address}</Text>
                  <Text style={styles.desc}>{spot.description}</Text>
                </View>
              </Callout>
            </Marker>)}
    </MapView>
    )
  }
}

const styles = StyleSheet.create({
  callout: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    width: '200%',
    textAlign: 'center',
    height: '100%'
  },
  name: {
    fontSize: 15,
    textAlign: 'center',
    width: '50%',
    fontWeight: 'bold'
  },
  address: {
    fontSize: 10,
    textAlign: 'center',
    width: '50%',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  desc: {
    fontSize: 10,
    textAlign: 'center',
    width: '50%',
  }
});

export default PKMap;