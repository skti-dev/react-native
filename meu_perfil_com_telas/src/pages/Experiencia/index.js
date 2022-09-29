import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from "../../../styles"
 
export default function Experiencia() {
  const navigation = useNavigation();
 return (
   <View>
     <Text>Formação</Text>
     <Button
        title="Abrir menu"
        onPress={ () => navigation.toggleDrawer() } 
      />
     <View style={styles.containerInfos}>
        <Text style={styles.title}>Experiência</Text>
        <Text style={styles.text}>{char} Desenvolvedor Front End</Text>
        <Text style={styles.text}>{char} Desenvolvedor FullStack Free Lancer</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Projetos</Text>
        <Text style={styles.text}>{char} SmartChannel: Plataforma omnichannel de atendimento humano</Text>
        <Text style={styles.text}>{char} GameK: Plataforma gameficada para controle de produtividade</Text>
      </View>
   </View>
  );
}