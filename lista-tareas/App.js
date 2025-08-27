import { Text, View, TextInput, Button } from "react-native";
import styles from "./styles/styles";
import React, { useState } from "react";

export default App = () => {
  const map = new Map();
  map.set('name', 'Johnatan');
  map.set('age', 19);
  map.set('city', 'Queretaro');

  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tarea, setTarea] = useState([]);

   const agregarTarea = () => {
    const texto = nuevaTarea.trim();
    if (!texto) return;
    const nueva = { id: Date.now(), texto };
    setTarea((prev) => [nueva, ...prev]);
    setNuevaTarea(""); 
  };

  const eliminarTarea = (id) => {
    setTarea((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Lista de Tareas</Text>
      </View>
      <View style={styles.inputcontainer}>
        <Text style={styles.inputLabel}>Nueva tarea:</Text>
        <TextInput
          placeholder="Escribe tu tarea"
          value={nuevaTarea}
          onChangeText={setNuevaTarea}
          style={styles.input}
        />
        <Button title="Agregar a la lista" onPress={agregarTarea} />
      </View>

       {tarea.map((item, index) => (
          <View
            key={item.id} style={styles.taskItem}>
            <Text style={styles.taskText}>
              {index + 1}. {item.texto}
            </Text>
            <Button title="Eliminar" onPress={() => eliminarTarea(item.id)} />
          </View>
        ))}
      
    </View>
  )
}