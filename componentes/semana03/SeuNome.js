import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function SeuNome() {
    const [nome, setNome] = useState('')
    const [nomeEnv, setNomeEnv] = useState('')
  
    const Enviar = () => {
      setNomeEnv(nome)
      alert('Nome enviado!')
    };
  
    return (
      <View>
        <Text style={styles.texto}>Escreva seu nome</Text>
        <Text style={styles.texto}>Nome:{nomeEnv}</Text>
  
        <TextInput
          style={styles.input}
          onChangeText={text => setNome(text)}
        />
  
        <Button
          title='Enviar'
          onPress={Enviar}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  texto: {
    fontSize: 30
    ,fontWeight: 'bold'
  },
  input: {
    fontSize: 30
    ,color: 'blue'
    ,borderWidth: 2
    ,margin: 10
    ,padding: 8
  }
});