import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#090',
    marginBottom: 10
  },
  frame: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(100, 100, 100, .1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300
  },
  box1:{
    backgroundColor: '#B50',
  },
  box2:{
    backgroundColor: '#0C5',
  },
  box3:{
    backgroundColor: '#10A',
  },
  box4:{
    backgroundColor: '#A01'
  },
  chip: {
    marginTop: 10,
    fontSize: 15,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: 'rgba(100, 100, 100, 0.3)',
    textAlign: 'center',
    color: '#FFF'
  }
})

export { styles }