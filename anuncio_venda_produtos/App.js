import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';

import { styles } from './styles'
 
class App extends Component{
  render(){
    const imageURL_01 = 'https://th.bing.com/th/id/OIP.zhNHNaL69f7Sya6bKXynMQHaD4?w=304&h=180&c=7&r=0&o=5&pid=1.7'
    const imageURL_02 = 'https://th.bing.com/th/id/OIP.wrIGrs5B88r4AuovIOGF1wHaDy?w=322&h=178&c=7&r=0&o=5&pid=1.7'
    const imageURL_03 = 'https://th.bing.com/th/id/OIP.-6QCOFmFNacbtqzfMwVOrQHaEj?w=257&h=180&c=7&r=0&o=5&pid=1.7'
    const imageURL_04 = 'https://th.bing.com/th/id/OIP.pMXXzVVNr3ovars5eKq0pwHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7'
    
    return(
      <View style={styles.container}>
        <Text style={styles.title}> Anúncio de Produtos </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.frame, styles.box1]}>
            <Image 
              source={{ uri: imageURL_01 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.chip}> Produto 01 </Text>
          </View>
          <View style={[styles.frame, styles.box2]}>
            <Image 
              source={{ uri: imageURL_02 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.chip}> Produto 02 </Text>
          </View>
          <View style={[styles.frame, styles.box3]}>
            <Image 
              source={{ uri: imageURL_03 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.chip}> Produto 03 </Text>
          </View>
          <View style={[styles.frame, styles.box4]}>
            <Image 
              source={{ uri: imageURL_04 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.chip}> Produto 04 </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
export default App;