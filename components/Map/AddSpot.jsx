import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native';

class AddSpot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Spot Name',
      desc: 'Description'
    }
    this.handleName = this.handleName.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
  }

  handleName(text) {
    this.setState({
      name: text
    })
  }
  handleDesc(text) {
    this.setState({
      desc: text
    })
  }

  render() {
    return (
      <View>
        <Text>Submit Spot?</Text>
        <TextInput
          onChangeText={this.handleName}
          value={this.state.name}></TextInput>
          <TextInput
          onChangeText={this.handleDesc}
          value={this.state.desc}></TextInput>
      </View>
    )
  }
}

export default AddSpot