import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: 'orange',
    textAlign: 'center',
    marginBottom: 15
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15
  },
  button: {
    width: 250,
    height: 50,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 5
  },
  input:{
    height: 45,
    width: 250,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 5
  },
  buttonBlue: {
    backgroundColor: 'lightblue'
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    lineHeight: 45
  }
})

 
export {styles}