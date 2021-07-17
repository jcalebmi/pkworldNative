import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation.jsx';
import background from './cracked-concrete-4.jpg';
import PKMap from './components/Map/PKMap.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: 'Home',
      spot: null,
      location: {
        lat: 28.5383,
        lng: -81.3792
      }
    }
    this.changeFeed = this.changeFeed.bind(this);
  }

  changeFeed (feed, spot) {
    this.setState({
      feed: feed,
      spot: spot
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Navigation changeFeed={this.changeFeed}/>
        <ImageBackground source={background} style={styles.background}>
          {this.state.feed === 'Map'
            ? <PKMap/>
            : null}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default App;