import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#F00'
  },
  containerInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 5
  },
  label: {
    fontWeight: 'bold'
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
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
  }
})

export { styles }