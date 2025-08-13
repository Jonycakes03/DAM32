import { StyleSheet, Text, View } from 'react-native';
import Mouse from '../assets/mouse.jpeg'; // Assuming you have an image in this path


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe6e9',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    color: '#2d3436',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 10,
    },
    box: {
        backgroundColor: 'red',
        width: '100%',
        height: 100,
        // marginLeft: 10,
        // marginRight: 10,
        justifyContent: 'flex-end',

    },
    boxImage: {
        backgroundColor: 'blue',
        width: '100%',
        height: '100%',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    foto:{
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
    
});

export default styles;