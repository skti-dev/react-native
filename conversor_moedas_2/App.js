import React, { Component } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
import axios from "axios"; 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      options: [
        { cod: 0, label: 'Real' },
        { cod: 1, label: 'Euro' },
        { cod: 2, label: 'Dólar' },
        { cod: 3, label: 'Bitcoin' },
      ],
      fromValue: 0,
      toValue: 1,
      result: false
    };
    
    this.setValue = this.setValue.bind(this);
  }
 
  setValue(text){
    if(!parseFloat(text)) return alert('Digite um valor numérico valido')
    this.setState({value: parseFloat(text)});
  }

  async calc() {
    if(!this.state.value) return alert('Preencha o valor a ser convertido')
    if(this.state.fromValue == this.state.toValue) return this.setState({ result: this.state.value })
    const returnStr = value => value == 0 ? 'BRL' : value == 1 ? 'EUR' : value == 2 ? 'USD' : 'BTC'
    const url = `https://economia.awesomeapi.com.br/json/last/${returnStr(this.state.fromValue)}-${returnStr(this.state.toValue)}`
    try {
      const response = await axios(url)
      const { ask } = Object.values(response.data)[0]
      if(!ask) return this.setState({ result: 'Erro na conversão dos valores' })
      if(this.state.value == parseFloat(1)) return this.setState({ result: parseFloat(ask) })
      this.setState({ result: parseFloat(ask) > 1 ? this.state.value / parseFloat(ask) : this.state.value * parseFloat(ask) })
    }catch(error) {
      console.error('Erro ao calcular o valor: ', error)
    }
  }

  render(){

    const optionsItems = this.state.options.map(({ cod, label }) => {
      return <Picker.Item key={cod} value={cod} label={label} />
    })

    return(
      <View style={styles.container}>

        <Text style={styles.title}> Conversor de Moedas 2 </Text>
 
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
          <Text style={styles.label}>Para: </Text>
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
          this.state.result != '' && 
          <Text style={styles.result}>{ this.state.result.toFixed(2) }</Text>
        }

      </View>
    );
  }
}
 
export default App;