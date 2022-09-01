import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    card:{
      backgroundColor: '#222',
      height: 200,
      marginHorizontal: 15,
      marginBottom: 15,
      padding: 10,
      borderRadius: 10
    },
    title:{
      color: '#FFF',
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#FFF'
    },
    cardInfo: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5
    },
    infoTitle: {
      color: '#FFF',
      fontWeight: 'bold',
      marginRight: 5
    },
    infoText: {
      color: '#FFF',
      marginRight: 75
    }
  })
 
export { styles };