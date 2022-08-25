import React, { Component } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { styles } from "./styles"
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      weight: 0,
      height: 0,
      result: ""
    };

    this.setWeight = this.setWeight.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }

  setWeight(text){
    if(!parseFloat(text)) return alert('Digite um valor numérico valido')
    this.setState({weight: parseFloat(text)});
  }

  setHeight(text){
    if(!parseFloat(text)) return alert('Digite um valor numérico valido')
    this.setState({height: parseFloat(text)});
  }

  calc() {
    if(!this.state.height || !this.state.weight) return alert("Preencha os campos corretamente")
    const height = this.state.height / 100;

    const imc = this.state.weight / (height * height);
    if (imc < 18.6) {
      this.setState({ result: `Abaixo do Peso (${imc})` })
    } else if (imc >= 18.6 && imc < 24.9) {
      this.setState({ result: `Peso Ideal (${imc})` })
    } else if (imc >= 24.9 && imc < 29.9) {
      this.setState({ result: `Levemente Acima do Peso (${imc})` })
    } else if (imc >= 29.9 && imc < 34.9) {
      this.setState({ result: `Obesidade Grau I (${imc})` })
    } else if (imc >= 34.9 && imc < 39.9) {
      this.setState({ result: `Obesidade Grau II (${imc})` })
    } else if (imc >= 40) {
      this.setState({ result: `Obesidade Grau III (${imc})` })
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Cálculo de IMC</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o peso em kg"
          onChangeText={this.setWeight}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a altura em cm"
          onChangeText={this.setHeight}
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