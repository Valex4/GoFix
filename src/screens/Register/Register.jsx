import React from 'react';
import { ScrollView ,View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GroupInput } from '../../components/Shared/GroupInput';
import Logo from '../../../assets/logo.jpg'
import Google from '../../../assets/google.jpg'

export const Register = () => {
    const navigation  = useNavigation() 
    const [name, setName] = React.useState('');
    const [lastname, setLasname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmpassword, setConfirmpassword] = React.useState('');

    const handleRegister = () => {
        Alert.alert("Datos ingresados", `\nNombre: ${name}\nApellido: ${lastname}\nEmail: ${email}\nContraseña: ${password}\nConfirmacion de contraseña: ${confirmpassword}`);
        navigation.navigate("Register", {})   
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
                <View style={styles.containerInputs}>
                    <GroupInput
                        option={1}
                        label={"Name"}
                        placeholder={"Jonh De Jesus"}
                        value={name}
                        onChangeText={setName}
                    />
                    <GroupInput
                        option={1}
                        label={"Apellido"}
                        placeholder={"Perez"}
                        value={lastname}
                        onChangeText={setLasname}
                    />
                    <GroupInput
                        option={1}
                        label={"Correo electrónico"}
                        placeholder={"Johndoe@example.com"}
                        value={email}
                        onChangeText={setEmail}
                    />
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
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    marginTop: '5%',
                    width: '100%',
                    height: '9%',
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
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ marginTop: '7%', marginBottom: '8%' }}>
                        <Text style={{ fontSize: 16, marginLeft: 10, color: '#000' }}>¿Ya tienes una cuenta?</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 10, color: '#126EC0' }}> Inicia sesión</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
 
const styles = StyleSheet.create({
    container: {
      marginTop:'3%',
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      padding: 20,
      width:'100%',
      height:'100%',
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
        height: '6%',
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