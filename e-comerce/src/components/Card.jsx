import { Children } from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Card = ({children, style}) => {
  return (
    <View style={{...styles.card, ...style}}>
        {children}
    </View>
  )
}
console.log()
export default Card

const styles = StyleSheet.create({
    card:{
        shadowColor: '#000',
        shadowOffset: {
            width:15,
            height: 15,
        },
        elevation:5,
        shadowOpacity:1,
        shadowRadius:1,
    }
})