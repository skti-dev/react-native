import axios from "axios";
import React, { useState } from "react";
import { View, Text, StatusBar, TextInput, Button, Image } from "react-native";

import { styles } from './styles'
 
const App = () => {
  const [currentUser, setCurrentUser] = useState("")
  const [currentURL, setCurrentURL] = useState("https://i.pinimg.com/736x/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.jpg")
  const [companyValue, setCompanyValue] = useState("")
  const [followersValue, setFollowersValue] = useState("")
  const [followingValue, setFollowingValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [loginValue, setLoginValue] = useState("")
  const [hasResult, setHasResult] = useState(false)

  const pesquisarDev = async () => {
    try {
      if(!currentUser) return alert("Preencha corretamente o login do usuário")
      setHasResult(false)
      const response = await axios(`https://api.github.com/users/${currentUser}`)
      const { avatar_url, company, followers, following, name, login } = response.data
      setCurrentURL(avatar_url)
      setCompanyValue(company)
      setFollowersValue(followers)
      setFollowingValue(following)
      setNameValue(name)
      setLoginValue(login)
      setHasResult(true)
    }catch(error) {
      console.error("Erro ao pesquisar o CEP: ", error)
    }
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Perfil dos Devs </Text>
      <StatusBar backgroundColor="#222" />

      <Image 
        source={{ uri: currentURL }}
        style={{ width: 200, height: 200, marginTop: 10 }}
      />
 
      <TextInput
        placeholder="Digite o login do usuário"
        value={currentUser}
        onChangeText={value => setCurrentUser(value)}
        style={styles.input}
      />
 
      <Button title="Incluir" onPress={pesquisarDev} />
      
      { hasResult &&
        <View style={styles.list}>
          <Text> Usuário: {currentUser} </Text>
          <Text> Empresa: {companyValue} </Text>
          <Text> Nome: {nameValue} </Text>
          <Text> Login: {loginValue} </Text>
          <Text> Seguidores: {followersValue} </Text>
          <Text> Seguindo: {followingValue} </Text>
        </View>
      }

    </View>
  );
};
 
export default App;