import React, { Component } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { styles } from "./styles"
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      gasValue: 0,
      alcoolValue: 0,
      result: ""
    };

    this.setGas = this.setGas.bind(this);
    this.setAlcool = this.setAlcool.bind(this);
  }

  setGas(text){
    if(!parseFloat(text)) return alert('Digite um valor numérico valido')
    this.setState({gasValue: parseFloat(text)});
  }

  setAlcool(text){
    if(!parseFloat(text)) return alert('Digite um valor numérico valido')
    this.setState({alcoolValue: parseFloat(text)});
  }

  calc() {
    if(!this.state.alcoolValue || this.state.gasValue) return alert("Preencha os campos corretamente")
    const isAlcoolWorth = this.state.alcoolValue / this.state.gasValue < 0.7
    this.setState({ result: `${isAlcoolWorth ? 'Álcool' : 'Gasolina'} é mais vantajoso` })
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Álcool ou Gasolina?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor da gasolina"
          onChangeText={this.setGas}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o valor do álcool"
          onChangeText={this.setAlcool}
        />
        
        <Pressable onPress={() => this.calc()} style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonText}>Calcular</Text>
        </Pressable>
        
        {
          this.state.result && <Text style={styles.text}> {this.state.result} </Text>
        }
      </View>
    );
  }
}
 
export default App;