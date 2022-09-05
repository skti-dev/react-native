import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'green',
    marginBottom: 10
  },
  result: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 10,
    marginVertical: 15
  },
  frame: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(100, 100, 100, .1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: '#CCC',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 5
  },
  buttonBlue: {
    backgroundColor: 'darkblue'
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    lineHeight: 45
  }
});

export {styles}