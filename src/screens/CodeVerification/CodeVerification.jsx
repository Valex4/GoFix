import React from 'react';
import {ScrollView ,View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GroupInput } from '../../components/Shared/GroupInput';
import Logo from '../../../assets/logo.jpg'

export const CodeVerification = () => {
    const navigation  = useNavigation() 
    const [code, setCode] = React.useState('');
    
    const handleNext = () => {
      Alert.alert("Datos ingresados", `Codigo: ${code}`);
      navigation.navigate("NewPassword")   
    };

    return(
    <ScrollView style={{ width: "100%", backgroundColor: '#E8ECF5', }}>
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 10, color: '#000' }}>GO</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 10, color: '#126EC0' }}>FIX</Text>
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={Logo}
            style={styles.image}
          />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#000', marginTop: 10 }}>Te enviamos un código</Text>
        <Text style={{ fontSize: 17, color: '#A9A9A9', marginTop: 10 }}>Consulta tu correo electrónico para obtener tu código de confirmación. Si tienes que solicitar un código nuevo, vuelve y selecciona un método de confirmación de nuevo.</Text>
        <View style={styles.containerInputs}>
          <GroupInput
            option={1}
            label={"Introduce tu código"}
            placeholder={"Jk1v2345"}
            value={code}
            onChangeText={setCode}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      padding: 20,
      width:'100%',
      height: '100%',
      backgroundColor: '#E8ECF5',
      gap:5
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
      },
    // logo
      imageContainer: {
        width: '40%',
        height: 100,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    // formulario
    containerInputs:{
        marginTop:'7%',
        flexDirection:'column',
        width: '100%',
        gap:30
    },
      button: {
        marginTop:'9%',
        width:'100%',
        height: '11%',
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