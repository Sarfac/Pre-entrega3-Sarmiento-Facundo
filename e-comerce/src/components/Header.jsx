import { StyleSheet, Text, View } from 'react-native'


const Header = ({titulo}) => {
  return (
    <View style={styles.headerContenedor}>
      <Text style={styles.hederTitulo}>{titulo}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContenedor: {
    height : 100 ,
    backgroundColor : '#4626cf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hederTitulo:{
    color:'#ffffff',
    fontFamily:'Inter-regular',
  }
})