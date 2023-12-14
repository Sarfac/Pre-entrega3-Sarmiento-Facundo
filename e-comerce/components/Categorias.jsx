import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";

const Categorias = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Text>Categorias</Text>
    </View>
  );
};

export default Categorias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
