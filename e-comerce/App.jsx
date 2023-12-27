
import { StyleSheet, View } from 'react-native';

import {useFonts} from 'expo-font'
import ProductoCatScreen from './src/screen/ProductoCatScreen';


export default function App() {

  const [cargarFuente] = useFonts({
    'Inter-regular' : require('./assets/fonts/Inter-Regular.ttf')
  })
  return (
    <View style={styles.container}>
      
      <ProductoCatScreen/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
