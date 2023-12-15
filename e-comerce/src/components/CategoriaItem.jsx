import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const CategoriaItem = ({ categoria }) => {
  return (
  
    <Card style={styles.cardContenedor}>
        <Text>{categoria}</Text>
    </Card>
  )
};

export default CategoriaItem;

const styles = StyleSheet.create({
    cardContenedor:{
        backgroundColor:'#F8F9FA',
       margin: 7,
       padding:7,
    }
});
