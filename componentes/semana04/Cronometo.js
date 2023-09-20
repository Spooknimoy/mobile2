import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Cronometro() {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [milissegundos, setMilissegundos] = useState("00");
  const [isRunning, setIsRunning] = useState(false);
  const [ultimoTempo, setUltimoTempo] = useState(null);

  useEffect(() => {
    let customInterval;

    if (isRunning) {
      customInterval = setInterval(() => {
        if (milissegundos === "99") {
          if (segundos === 59) {
            if (minutos === 59) {
              setHoras((prevHoras) => prevHoras + 1);
              setMinutos(0);
            } else {
              setMinutos((prevMinutos) => prevMinutos + 1);
            }
            setSegundos(0);
          } else {
            setSegundos((prevSegundos) => prevSegundos + 1);
          }
          setMilissegundos("00");
        } else {
          let newMilissegundos = (parseInt(milissegundos, 10) + 1).toString().padStart(2, '0');
          setMilissegundos(newMilissegundos);
        }
      }, 10); // Atualização a cada 10 milissegundos
    } else {
      clearInterval(customInterval);
    }

    return () => clearInterval(customInterval);
  }, [isRunning, milissegundos, segundos, minutos, horas]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setUltimoTempo({ horas, minutos, segundos, milissegundos });
  };

  const clearTimer = () => {
    setIsRunning(false);
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
    setMilissegundos("00");
    setUltimoTempo(null);
  };

  const formatTempo = (tempo) => {
    if (!tempo) {
      return '00:00:00.00';
    }

    const { horas, minutos, segundos, milissegundos } = tempo;
    return `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}.${milissegundos}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textCustom}>
        {formatTempo({ horas, minutos, segundos, milissegundos })}
      </Text>
      {ultimoTempo && (
        <Text style={styles.ultimoTempo}>
          Último tempo: {formatTempo(ultimoTempo)}
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.startButton]} onPress={startTimer} disabled={isRunning}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.stopButton]} onPress={stopTimer}>
          <Text style={styles.buttonText}>Parar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={clearTimer}>
          <Text style={styles.buttonText}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  buttonContainer: {
    width: '70%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  button: {
    padding: 15,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#28a745',
    marginRight: 10,
  },
  stopButton: {
    backgroundColor: '#dc3545',
    marginRight: 10,
  },
  resetButton: {
    backgroundColor: '#343a40',
  },
  textCustom: {
    fontSize: 90,
    backgroundColor: 'black',
    color: '#FFF'
  },
  ultimoTempo: {
    fontSize: 30,
    marginTop: 10,
    color: '#FFF'
  }
});
