import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#FCFCFC'
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
    margin: 5,
    backgroundColor: '#FFF'
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
  }
})

export { styles }