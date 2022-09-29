import React from 'react';
import { View, Text } from 'react-native';
 
export default function Infos({ route }){
  const returnLabelFromValue = (value, origin) => {
    const arr = origin == 'sex' ? route.params?.props.sexOptions : route.params?.props.scholarshipOptions
    let text = ''
    if(arr && arr.length) {
      arr.forEach(item => {
        if(item.value == value) text = item.label
      })
      return text ? text : value
    }
    return value
  }

  return(
    <View>
      <Text> Nome: { route.params?.props.name } </Text>
      <Text> Idade: { route.params?.props.age } </Text>
      <Text> Sexo: { returnLabelFromValue(route.params?.props.sex, 'sex') } </Text>
      <Text> Escolaridade: { returnLabelFromValue(route.params?.props.scholarship, 'scholarship') } </Text>
      <Text> Limite: { route.params?.props.limitValue } </Text>
      <Text> Brasileiro: { route.params?.props.isBrazilian ? 'Sim' : 'Não' } </Text>
    </View>
  )
}