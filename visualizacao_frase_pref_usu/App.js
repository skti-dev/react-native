import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles } from './styles'
 
export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isDay: true,
      isSmall: true
    }
  }
 
  async componentDidMount(){
    try {
      await AsyncStorage.getItem('isDay').then(value => this.setState( {isDay: JSON.parse(value)} ))
      await AsyncStorage.getItem('isSmall').then(value => this.setState( {isSmall: JSON.parse(value)} ))
    }catch(error) {
      console.error("Error mount: ", error)
    }
  }

  async setIsDay(state) {
    try {
      this.setState({ isDay: state })
      const storageIsDay = await AsyncStorage.getItem('isDay').then(value => value && JSON.parse(value))
      if(!storageIsDay || storageIsDay != state) await AsyncStorage.setItem('isDay', JSON.stringify(state))
    }catch(error) {
      console.error("Error setIsDay: ", error)
    }
  }

  async setIsSmall(state) { 
    try {
      this.setState({ isSmall: state })
      const storageIsSmall = await AsyncStorage.getItem('isSmall').then(value => value && JSON.parse(value))
      if(!storageIsSmall || storageIsSmall != state) await AsyncStorage.setItem('isSmall', JSON.stringify(state))
    }catch(error) {
      console.error("Error setIsSmall: ", error)
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}> Frases </Text>
        <View style={styles.options}>
          <View style={styles.option}>
            <Text style={styles.textBold}>Dia</Text>
            <Switch 
              value={this.state.isDay}
              onValueChange={state => this.setIsDay(state)}
              />
          </View>
          <View style={styles.option}>
            <Text style={styles.textBold}>Pequeno</Text>
            <Switch 
              value={this.state.isSmall}
              onValueChange={state => this.setIsSmall(state)}
            />
          </View>
        </View>
        <View style={[styles.textContainer, this.state.isDay ? styles.bgDay : styles.bgNight]}>
          <Text style={[this.state.isSmall ? styles.textSmall : styles.textBig, this.state.isDay ? styles.textBlack : styles.textWhite]}>
            "A vingança nunca é plena, mata a alma e a envenena." (Seu Madruga)
          </Text>
        </View>
 
      </View>    
    );
 
  }
 
}
