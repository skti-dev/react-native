import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 40
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      color: '#369'
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#CCC',
      margin: 10,
      fontSize: 16,
      padding: 10,
    },
    containerInput: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 5
    },
    label: {
      fontWeight: 'bold',
      fontSize: 16
    },
    picker: {
      flex: 1
    },
    containerButton: {
      flexDirection: 'row'
    },
    button: {
      flex: 1,
      height: 50,
      marginHorizontal: 15,
      marginBottom: 15,
      borderRadius: 5
    },
    buttonBlue: {
      backgroundColor: '#000099'
    },
    buttonText: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#FFF',
      lineHeight: 50
    },
    result: {
      fontSize: 18,
      padding: 10,
      fontWeight: 'bold',
      borderRadius: 10,
      borderColor: '#CCC',
      borderWidth: 1,
      textAlign: 'center',
      marginTop: 10
    }
  });
 
  export { styles };
