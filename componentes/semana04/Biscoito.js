import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Biscoito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frase: '',
      botaoBloqueado: false,
    };
  }

  quebrarBiscoito = () => {
    const frasesSorte = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Siga os bons e aprenda com eles.',
      // Adicione mais frases de sorte aqui
    ];

    const fraseSorte = frasesSorte[Math.floor(Math.random() * frasesSorte.length)];
    this.setState({ frase: fraseSorte, botaoBloqueado: true });
  }

  reiniciarBiscoito = () => {
    this.setState({ frase: '', botaoBloqueado: false });
  }

  render() {
    const { frase, botaoBloqueado } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.frase}>{frase}</Text>
        <TouchableOpacity
          style={[styles.botao, botaoBloqueado && styles.botaoBloqueado]}
          onPress={botaoBloqueado ? this.reiniciarBiscoito : this.quebrarBiscoito}
        >
          <Text style={styles.textoBotao}>
            {botaoBloqueado ? 'Reiniciar Biscoito' : 'Quebrar Biscoito'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frase: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: 'skyblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  botaoBloqueado: {
    backgroundColor: 'gray',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Biscoito;
