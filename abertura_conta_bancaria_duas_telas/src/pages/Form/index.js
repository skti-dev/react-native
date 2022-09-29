import React, { Component } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'

import { styles } from './styles'
import ButtonRegister from '../../components/ButtonRegister';
 
class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      age: "",
      sexOptions: [
        { cod: 0, value: 'M', label: 'Masculino' },
        { cod: 1, value: 'F', label: 'Feminino' },
      ],
      sex: 'M',
      scholarshipOptions: [
        { cod: 0, value: 'EBI', label: 'Ensino Básico Incompleto' },
        { cod: 1, value: 'EBC', label: 'Ensino Básico Completo' },
        { cod: 2, value: 'EMI', label: 'Ensino Médio Incompleto' },
        { cod: 3, value: 'EMC', label: 'Ensino Médio Completo' },
        { cod: 4, value: 'ESI', label: 'Ensino Superior Incompleto' },
        { cod: 5, value: 'ISC', label: 'Ensino Superior Completo' },
      ],
      scholarship: 'EBI',
      limitValue: 500,
      isBrazilian: true
    };
    
    this.setName = this.setName.bind(this);
    this.setAge = this.setAge.bind(this);
  }
 
  setName(text){
    this.setState({ name: text });
  }

  setAge(text){
    this.setState({ age: text });
  }

  setSex(value) {
    this.setState({ sex: value })
  }

  setScholarship(value) {
    this.setState({ scholarship: value })
  }

  setLimitValue(value) {
    this.setState({ limitValue: value })
  }

  setIsBrazilian(state) {
    this.setState({ isBrazilian: state })
  }

  render(){
    
    const sexItems = this.state.sexOptions.map(({ cod, value, label }) => {
      return <Picker.Item key={cod} value={value} label={label} />
    })

    const scholarshipItems = this.state.scholarshipOptions.map(({ cod, value, label }) => {
      return <Picker.Item key={cod} value={value} label={label} />
    })

    return(
      <View style={styles.container}>
        
        <View style={styles.containerInput}>
          <Text style={styles.label}>Nome: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={this.setName}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Idade: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua idade"
            onChangeText={this.setAge}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Sexo: </Text>
          <Picker 
            style={styles.input}
            selectedValue={this.state.sex}
            onValueChange={(itemValue, itemIndex) => this.setSex(itemValue)}
          >
            { sexItems }
          </Picker>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Escolaridade: </Text>
          <Picker 
            style={styles.input}
            selectedValue={this.state.scholarship}
            onValueChange={(itemValue, itemIndex) => this.setScholarship(itemValue)}
          >
            { scholarshipItems }
          </Picker>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Limite: </Text>
          <Slider 
            style={styles.input}
            minimumValue={100}
            maximumValue={1000}
            step={10}
            onValueChange={value => this.setLimitValue(value)}
            value={this.state.limitValue}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.label}>Brasileiro: </Text>
          <Switch 
            value={this.state.isBrazilian}
            onValueChange={state => this.setIsBrazilian(state)}
          />
        </View>
  
        <View style={styles.containerButton}>
          <ButtonRegister props={this.state} />
        </View>

      </View>
    );
  }
}
 
export default Form;