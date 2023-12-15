import { StyleSheet, Text, TouchableOpacity , Image} from 'react-native'


const ProdutoItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.contenedorItem}>
        <Text style={styles.prductoTitulo}>{item.title}</Text>
        <Image
            style={styles.prductoImagen}
            resizeMode='cover'
            source={{uri: item.thumbnail}}
        />
    </TouchableOpacity>
  )
}

export default ProdutoItem

const styles = StyleSheet.create({
    contenedorItem:{
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:10,
        margin:10,
    },
    prductoImagen:{
        width:60,
        height:60,
    }
})