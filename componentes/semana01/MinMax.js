
import React from 'react';
import { View, Text, Button } from 'react-native';

class MinMax extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numeroAleatorio: null,
    };
  }

  gerarNumeroAleatorio = () => {
    const { min, max } = this.props;
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({ numeroAleatorio });
  };

  render() {
    return (
      <View>
        <Button title="Gerar Número Aleatório" onPress={this.gerarNumeroAleatorio} />
        {this.state.numeroAleatorio !== null && (
          <Text>Número Aleatório: {this.state.numeroAleatorio}</Text>
        )}
      </View>
    );
  }
}

export default MinMax;
