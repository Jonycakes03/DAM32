import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {useState} from 'react';


export default function App() {
const [counter, setCounter] = useState(0);  
  
const incrementCounter = () => {
  setCounter(counter + 1);
};

const decrementCounter = () => {
  setCounter(counter - 1);
};  

const handleChange = (text) => {
  const value = parseInt(text, 10);
    if (!isNaN(value)) {
      setCounter(value);
    } else {
      setCounter(0); 
    }
}

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mi primer contador en react native</Text>
      <Text style = {styles.text}>contador: {counter}</Text>
      <TextInput placeholder="Ingrese un numero" keyboardType="numeric" value={String(counter)} onChangeText={handleChange}/>
      <Button title="Incrementar numero" onPress={incrementCounter} color="#F05C95"/> 
      <Button title="Decrementar numero" onPress={decrementCounter} color ="#6C63FF"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEFF5", 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#4A2F3B", 
    marginBottom: 10,
    textAlign: "center",
  },
});
