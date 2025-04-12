import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumarN = () => {
    const a = parseFloat(numero1);
    const b = parseFloat(numero2);
    if (!isNaN(a) && !isNaN(b)) {
      setResultado(a + b);
    } else {
      setResultado('Ingresa numeros validos');
    }
  };

  const restarN = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setResultado(n1 - n2);
    } else {
      setResultado('Ingresa numeros validos');
    }
  };

  const multipN = () => {
    const x = parseFloat(numero1);
    const y = parseFloat(numero2);
    if (!isNaN(x) && !isNaN(y)) {
      setResultado(x * y);
    } else {
      setResultado('Ingresa numeros validos');
    }
  };

  const divN = () => {
    const i = parseFloat(numero1);
    const j = parseFloat(numero2);
    if (!isNaN(i) && !isNaN(j)) {
      if (j !== 0) {
        setResultado(i / j);
      } else {
        setResultado('No se puede dividir por 0');
      }
    } else {
      setResultado('Ingresa numeros validos');
    }
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
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#4CAF50' }]} onPress={sumarN}>
        <Text style={styles.btnText}>➕</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: '#2196F3' }]} onPress={restarN}>
        <Text style={styles.btnText}>➖</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: '#FF9800' }]} onPress={multipN}>
        <Text style={styles.btnText}>✖️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { backgroundColor: '#F44336' }]} onPress={divN}>
        <Text style={styles.btnText}>➗</Text>
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
    backgroundColor:'black',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color:'white',
  },
  input: {
    height: 45,
    borderColor: 'white',
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
    fontSize: 30,
    color: 'white',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
