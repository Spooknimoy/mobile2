import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MinMax from './componentes/semana01/MinMax';
import Biscoito from './componentes/semana04/Biscoito';
import Cronometro from './componentes/semana04/Cronometo';



export default function App() {
  return (
    
    
    <View style={styles.container}>
     <Cronometro></Cronometro>
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
