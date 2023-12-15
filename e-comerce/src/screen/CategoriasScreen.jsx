import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import categories_data from "../data/categories_data.json";
import CategoriaItem from "../components/CategoriaItem";

const CategoriasScreen = () => {
  const renderItem = ({ item }) => (
    <CategoriaItem categoria={item}></CategoriaItem>
  );

  return (
    <View>
      <Header titulo="Categorias"></Header>
      <FlatList
        data={categories_data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default CategoriasScreen;

const styles = StyleSheet.create({});
