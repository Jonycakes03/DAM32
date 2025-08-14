import { Text, View, Image } from "react-native";
import styles from "./styles/styles";
import Jonny from "./assets/jonny.jpg"; 

export default App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Mi Bibliografia</Text>
      </View>
      <View>
        <Image source={Jonny} style={styles.foto} />
      </View>
      <View style={{marginTop: 10, padding: 16}}>
        <Text>Hola todos yo soy Johnatan me gusta mucho escuchar musica, ver peliculas y series,
          ahorita estoy intentando leer mas, yo soy de santa rosa jauregui, los fines de semana trabajo y en las 
          tardes me gusta ir a comer o salir. </Text>
      </View>
    
    </View>
  )
}