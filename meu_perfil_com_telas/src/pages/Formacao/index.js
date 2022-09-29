import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from "../../../styles"
 
export default function Formacao() {
  const navigation = useNavigation();
 return (
   <View>
     <Text>Formação</Text>
     <Button
        title="Abrir menu"
        onPress={ () => navigation.toggleDrawer() } 
      />
     <View style={styles.containerInfos}>
      <Text style={styles.title}>Formação</Text>
      <Text style={styles.text}>{char} ITB - Instituto Técnico de Barueri</Text>
      <Text style={styles.text}>{char} FIAP</Text>
    </View>
   </View>
  );
}