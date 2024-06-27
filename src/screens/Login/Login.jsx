import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GroupInput } from '../../components/Shared/GroupInput';
import Logo from '../../../assets/logo.jpg'
import Google from '../../../assets/google.jpg'

export const Login = () =>{
    const navigation  = useNavigation() 
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        Alert.alert("Datos ingresados", `Email: ${email}\nContraseña: ${password}`);
        navigation.navigate("Root", {})   
      };

    return(
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
        <View style={styles.containerInputs}>
          <GroupInput
            option={1}
            label={"Correo electrónico"}
            placeholder={"Johndoe@example.com"}
            value={email}
            onChangeText={setEmail}
          />
          <GroupInput
            option={2}
            label="Contraseña"
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            text="¿Ha olvidado su contraseña?"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          gap: 8,
          marginTop: '5%',
          width: '100%',
          height: '8%',
          paddingVertical: 10,
          borderRadius: 5,
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#',
        }} onPress={() => { }}>
          <Image
            source={Google} // Aquí deberías poner la URL de tu imagen
            style={{}}
          />
          <Text style={{
            color: '#000',
            fontSize: 16,
          }}>Inicie sesión usando Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ marginTop: '7%' }}>
            <Text style={{ fontSize: 16, marginLeft: 10, color: '#000' }}>¿No tienes una cuenta?</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 10, color: '#126EC0' }}> Registrate</Text>
          </Text>

        </TouchableOpacity>
      </View>
    )
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
        marginTop:'10%',
        flexDirection:'column',
        width: '100%',
        gap:30
    },
      button: {
        marginTop:'9%',
        width:'100%',
        height: '7%',
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