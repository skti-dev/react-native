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
    width: 200,
    height: 40,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 5
  },
  buttonGreen: {
    backgroundColor: 'green'
  },
  buttonRed: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    lineHeight: 35
  }
})

 
export {styles}