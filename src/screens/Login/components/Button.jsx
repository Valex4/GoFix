import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';

function Button() {
    return ( 
        <TouchableOpacity style={styles.button} onPress={()=> {
            navigation.navigate("Register", {
            nameService,
            nameWorkshop,
            direction,
            phone: 12345679
            })}}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
     );
}

export default Button;

const styles = StyleSheet.create({
button: {
    marginTop:'9%',
    width:'100%',
    height: '8%',
    backgroundColor: '#126EC0',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
},
buttonText: {
    color: '#fff',
    fontSize: 16,
},
});