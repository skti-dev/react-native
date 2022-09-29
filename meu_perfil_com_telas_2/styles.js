import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  containerLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  frame: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(100, 100, 100, .1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInfos: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  text: {
    fontSize: 16,
    color: '#333'
  }
})

export { styles }
