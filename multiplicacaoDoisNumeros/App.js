import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstValue: 0,
      secondValue: 0,
      product: 0
    };
    
    this.setFirstValue = this.setFirstValue.bind(this);
    this.setSecondValue = this.setSecondValue.bind(this);
 
    this.calc = this.calc.bind(this);
  }
 
  setFirstValue(text){
    if(!parseInt(text)) return alert('Digite um valor inteiro valido')
    this.setState({firstValue: parseInt(text)});
  }

  setSecondValue(text){
    if(!parseInt(text)) return alert('Digite um valor inteiro valido')
    this.setState({secondValue: parseInt(text)});
  }

  calc(){
    this.setState({
      product: this.state.firstValue * this.state.secondValue
    });
  }
 
  render(){
    return(
      <View style={styles.container}>
 
        <TextInput
          style={styles.input}
          placeholder="Digite o primeiro valor"
          onChangeText={this.setFirstValue}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o segundo valor"
          onChangeText={this.setSecondValue}
        />
  
        <Button title="Calcular" onPress={this.calc} />
 
        <Text style={styles.texto}> {this.state.product} </Text>
      </View>
    );
  }
}
 
export default App;