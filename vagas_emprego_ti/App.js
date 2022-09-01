import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Vaga from './src/Vaga'
 
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {
          id: 1, 
          title: 'Desenvolvedor PHP Pleno', 
          salary: 'R$ 6.500', 
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisi sed ex feugiat cursus. Nullam interdum tincidunt purus vitae facilisis', 
          contact: '+55 (11) 90000-0000'
        },
        {
          id: 2, 
          title: 'Engenheiro de Dados', 
          salary: 'R$ 7.000', 
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisi sed ex feugiat cursus. Nullam interdum tincidunt purus vitae facilisis', 
          contact: '+55 (11) 90000-0000'},
        {
          id: 3, 
          title: 'DBA', 
          salary: 'R$ 8.000', 
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisi sed ex feugiat cursus. Nullam interdum tincidunt purus vitae facilisis', 
          contact: '+55 (11) 90000-0000'},
        {
          id: 4, 
          title: 'Desenvolvedor React Native Senior', 
          salary: 'R$ 8.500', 
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisi sed ex feugiat cursus. Nullam interdum tincidunt purus vitae facilisis', 
          contact: '+55 (11) 90000-0000'},
        {
          id: 5, 
          title: 'Desenvolvedor Vue JS Pleno', 
          salary: 'R$ 4.000', 
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisi sed ex feugiat cursus. Nullam interdum tincidunt purus vitae facilisis', 
          contact: '+55 (11) 90000-0000'},
      ]
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}> Vagas de Emprego TI </Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Vaga data={item}/>}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 40
  },
  title: {
    color: '#44F',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10
  }
})
 
export default App;