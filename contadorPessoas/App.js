import React, { Component } from 'react';
import { View, Text, Pressable} from 'react-native';
import { styles } from "./styles"
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  plusCount() {
    this.setState({ count: this.state.count + 1 })
  }

  minusCount() {
    if(this.state.count > 0) this.setState({ count: this.state.count - 1 })
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Contador de Pessoas</Text>
        <Text style={styles.text}>{this.state.count}</Text>
        <Pressable onPress={() => this.plusCount()} style={[styles.button, styles.buttonGreen]}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.buttonRed]} onPress={() => this.minusCount()}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>
    );
  }
}
 
export default App;