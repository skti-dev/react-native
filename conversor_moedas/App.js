import React, { Component } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      options: [
        { cod: 0, label: 'Real' },
        { cod: 1, label: 'Euro' },
        { cod: 2, label: 'Dólar' },
      ],
      fromValue: 0,
      toValue: 1,
      euroDolar: 1.0825,
      euroReal: 5.06,
      dolarReal: 4.67,
      result: false
    };
    
    this.setValue = this.setValue.bind(this);
  }
 
  setValue(text){
    if(!parseFloat(text)) return alert('Digite um valor numérico valido')
    this.setState({value: parseFloat(text)});
  }

  calc() {
    if(!this.state.value) return alert('Preencha o valor a ser convertido')
    if(this.state.fromValue == this.state.toValue) return this.setState({ result: this.state.value })
    // Real -> Euro
    if(this.state.fromValue == 0 && this.state.toValue == 1) return this.setState({ result: this.state.value / this.state.euroReal })
    // Real -> Dolar
    if(this.state.fromValue == 0 && this.state.toValue == 2) return this.setState({ result: this.state.value / this.state.dolarReal })
    // Euro -> Real
    if(this.state.fromValue == 1 && this.state.toValue == 0) return this.setState({ result: this.state.value * this.state.euroReal })
    // Euro -> Dolar
    if(this.state.fromValue == 1 && this.state.toValue == 2) return this.setState({ result: this.state.value * this.state.euroDolar })
    // Dolar -> Real
    if(this.state.fromValue == 2 && this.state.toValue == 0) return this.setState({ result: this.state.value * this.state.dolarReal })
    // Dolar -> Euro
    if(this.state.fromValue == 2 && this.state.toValue == 1) return this.setState({ result: this.state.value / this.state.euroDolar })
  }

  render(){

    const optionsItems = this.state.options.map(({ cod, label }) => {
      return <Picker.Item key={cod} value={cod} label={label} />
    })

    return(
      <View style={styles.container}>

        <Text style={styles.title}> Conversor de Moedas </Text>
 
        <TextInput
          style={styles.input}
          placeholder="Digite o valor a ser convertido"
          onChangeText={this.setValue}
        />

        <View style={styles.containerInput}>
          <Text style={styles.label}>De: </Text>
          <Picker 
            style={styles.picker}
            selectedValue={this.state.fromValue}
            onValueChange={(itemValue, itemIndex) => this.setState({ fromValue: itemValue })}
          >
            { optionsItems }
          </Picker>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>De: </Text>
          <Picker 
            style={styles.picker}
            selectedValue={this.state.toValue}
            onValueChange={(itemValue, itemIndex) => this.setState({ toValue: itemValue })}
          >
            { optionsItems }
          </Picker>
        </View>

        <View style={styles.containerButton}>
          <Pressable 
            onPress={() => this.calc()} 
            style={[styles.button, styles.buttonBlue]}
          >
            <Text style={styles.buttonText}> Converter </Text>
          </Pressable>
        </View>

        {
          this.state.result && 
          <Text style={styles.result}>{ this.state.result.toFixed(2) }</Text>
        }

      </View>
    );
  }
}
 
export default App;