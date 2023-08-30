import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Contador2() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>VOLUME</Text>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.botao}>
        <Button title='+ INCREMENTAR' onPress={increment} />
        <Button title='- DECREMENTAR' onPress={decrement} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30
  },
  botao: {
    flexDirection: 'row',
    marginTop: 20
    ,
  },
});
