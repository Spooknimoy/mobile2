import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MinMax from './componentes/semana01/MinMax';



export default function App() {
  return (
    
    
    <View style={styles.container}>
      <MinMax min={1} max={100} ></MinMax>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
