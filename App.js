import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const operar = (tipo) => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Ingresa números válidos');
      return;
    }

    let res;
    switch (tipo) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case 'x':
        res = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setResultado('No se puede dividir por 0');
          return;
        }
        res = n1 / n2;
        break;
      default:
        setResultado('Operación no válida');
        return;
    }

    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 1"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 2"
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#560C70' }]} onPress={() => operar('+')}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: '#560C70' }]} onPress={() => operar('-')}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: '#560C70' }]} onPress={() => operar('x')}>
          <Text style={styles.btnText}>x</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: '#560C70' }]} onPress={() => operar('/')}>
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>
      </View>

      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'black',
    fontStyle: '',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    height: 45,
    borderColor: '#D6DBE0',
    borderWidth: 1,
    marginBottom: 10,
    width: '75%',
    paddingLeft: 10,
    fontSize: 18,
    borderRadius: 10,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  btn: {
    width: '48%',
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 6,
  },
  btnText: {
    fontSize: 40,
    color: '#D6DBE0',
    justifyContent: 'center',
    alignItems:'center',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});