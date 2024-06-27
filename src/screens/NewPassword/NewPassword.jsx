import React from 'react';
import {ScrollView ,View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GroupInput } from '../../components/Shared/GroupInput';
import Logo from '../../../assets/logo.jpg'

export const NewPassword = () => {
    const navigation  = useNavigation() 
    const [password, setPassword] = React.useState('');
    const [confirmpassword, setConfirmpassword] = React.useState('');
    
    const handleNext = () => {
      Alert.alert("Datos ingresados", `Constraseña: ${password},\nConfirmacion contraseña: ${confirmpassword}`);
      navigation.navigate("Login")   
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
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#000', marginTop: 10 }}>Elige una contraseña nueva</Text>
        <Text style={{ fontSize: 17, color: '#A9A9A9', marginTop: 10 }}>Asegúrate de que tu contraseña tenga 8 caracteres o más. Intenta que incluya números, letras y signos de puntuación para que sea una contraseña segura.</Text>
        <View style={styles.containerInputs}>
        <GroupInput
            option={3}
            label="Contraseña"
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
        />
        <GroupInput
            option={3}
            label="Confirmar contraseña"
            placeholder="Confirmar contraseña"
            value={confirmpassword}
            onChangeText={setConfirmpassword}
        />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
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
        height: '9%',
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