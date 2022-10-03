import axios from "axios";
import React, { useState } from "react";
import { View, Text, StatusBar, TextInput, Button } from "react-native";

import { styles } from './styles'
 
const App = () => {
  const [cepValue, setCepValue] = useState("")
  const [bairroValue, setBairroValue] = useState("")
  const [localidadeValue, setLocalidadeValue] = useState("")
  const [logradouroValue, setLogradouroValue] = useState("")
  const [ufValue, setUfValue] = useState("")
  const [hasResult, setHasResult] = useState(false)

  const pesquisarCep = async () => {
    try {
      const response = await axios(`https://viacep.com.br/ws/${cepValue}/json/`)
      const { bairro, localidade, logradouro, uf, cep } = response.data
      setBairroValue(bairro)
      setLocalidadeValue(localidade)
      setLogradouroValue(logradouro)
      setUfValue(uf)
      setCepValue(cep)
      setHasResult(true)
    }catch(error) {
      console.error("Erro ao pesquisar o CEP: ", error)
    }
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Consulta de CEP </Text>
      <StatusBar backgroundColor="#222" />
 
      <TextInput
        placeholder="Digite um CEP"
        value={cepValue}
        onChangeText={value => setCepValue(value)}
        style={styles.input}
      />
 
      <Button title="Incluir" onPress={pesquisarCep} />
      
      { hasResult &&
        <View style={styles.list}>
          <Text> CEP: {cepValue} </Text>
          <Text> Bairro: {bairroValue} </Text>
          <Text> Logradouro: {logradouroValue} </Text>
          <Text> Localidade: {localidadeValue} </Text>
          <Text> UF: {ufValue} </Text>
        </View>
      }

    </View>
  );
};
 
export default App;