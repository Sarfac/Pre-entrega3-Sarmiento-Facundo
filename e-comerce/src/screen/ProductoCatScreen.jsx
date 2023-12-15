import { FlatList, StyleSheet, View } from "react-native";
import products_data from "../data/products_data.json";
import ProdutoItem from "../components/ProdutoItem";
import Header from "../components/Header";

const ProductoCatScreen = () => {
  const renderProduct = ({ item }) => <ProdutoItem item={item} />;

  return (
    <View>
      <Header titulo="Productos"></Header>
      <FlatList
        data={products_data}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductoCatScreen;

const styles = StyleSheet.create({});
