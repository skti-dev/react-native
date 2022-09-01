import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles'
 
class Vaga extends Component{
    render(){
      return(
        <View style={styles.card}>
          <Text style={styles.title}> { this.props.data.title } </Text>
          <View style={styles.cardInfo}>
            <Text style={styles.infoTitle}>Salário:</Text>
            <Text style={styles.infoText}>{ this.props.data.salary }</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.infoTitle}>Descrição:</Text>
            <Text style={styles.infoText}>{ this.props.data.jobDescription }</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.infoTitle}>Contato:</Text>
            <Text style={styles.infoText}>{ this.props.data.contact }</Text>
          </View>
        </View>
      );
    }
  }
 
export default Vaga;