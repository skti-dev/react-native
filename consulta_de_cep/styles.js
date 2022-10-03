import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 5,
    fontSize: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#333'
  },
  input: {
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  list: {
    marginTop: 10,
  }
})

export { styles }