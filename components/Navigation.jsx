import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, View } from 'react-native';
import background from '../space-624054_1280.jpg'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.feeds = ['Home', 'Map', 'Events', 'Users', 'Profile']
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.changeFeed(e.target.value)
  }

  render () {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.image}>
          <Text style={styles.header} onClick={() => {this.props.changeFeed('Home')}}>PK World</Text>
          <View style={styles.buttons}>
            {this.feeds.map((feed, index) => <Button style={styles.button} key={feed} onPress={this.handleClick} value={feed} title={feed}>{feed}</Button>)}
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    color: 'white',
    flex: 1,
    position: 'absolute',
    top: '0%',
    width: '100%',
    textAlign: 'center',
    margin: 'auto',
    zIndex: 5,
    alignContent: 'flex-end',
    justifyContent: 'space-around'
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  buttons: {
    display: 'flex',
    alignContent: 'flex-end',
    justifyContent: 'space-around',
  },
  button: {
    margin: '0%',
    padding: '0%'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default Navigation;