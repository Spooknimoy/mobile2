import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Botao() {

    function executarBotao2 () {
        alert('btao 2')
    }
  return (
    <View>
      <Text style={styles.texto}>Botões</Text>

      <Button
      style={styles.texto}
      title='clique aqui'   
      onPress={() => alert('botao 1')}>
        
      </Button>
      
      <Button
      style={styles.texto}
      title='clique aqui'   
      onPress={executarBotao2}>
        
      </Button>

      
      <Button
      style={styles.texto}
      title='clique aqui'   
      onPress={executarBotao2}>
        
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})