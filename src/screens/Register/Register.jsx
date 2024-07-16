import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';
import { FontAwesome } from '@expo/vector-icons';
import { GroupInput } from '../../components/Shared/GroupInput';
import { createUser } from '../../api/routes';
import Logo from '../../../assets/logo.jpg';
import Google from '../../../assets/google.jpg';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Nombre es requerido'),
  email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es requerida'),
  confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Confirmar contraseña es requerida'),
  is_mechanic: Yup.boolean().required('Campo requerido'), 
});

export const Register = () => {
  const navigation = useNavigation();
  
  const handleRegister = async (values) => {
    Alert.alert("Datos ingresados",`${values}`);
    console.log("Imprimiendo el objeto del registro")
    console.log(values)
    const objectDataFront = {  
      name: values.name,
      email: values.email,
      password: values.password,
      is_mechanic: values.is_mechanic
    }
    console.log("Imprimiendo el objeto despues del formateo")
    console.log(objectDataFront)
     try {
       console.log(objectDataFront);
       const response = await createUser(objectDataFront);
       if(response.status === 200){
         Alert.alert("Todo ok")
      }
     navigation.navigate("Login");
    } catch (error) {
     Alert.alert('Registro fallido', error.message);
    }
  };
  
  const [selectedValue, setSelectedValue] = useState(null);

  const items = [
      { label: 'Usuario', value: false },
      { label: 'Mecanico', value: true },
  ];

  return (
    <ScrollView style={{ width: "100%", backgroundColor: '#E8ECF5' }}>
    <View style={styles.container}>
        <Text style={styles.text}>
            <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 10, color: '#000' }}>GO</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 10, color: '#126EC0' }}>FIX</Text>
        </Text>
        <View style={styles.imageContainer}>
            <Image source={Logo} style={styles.image} />
        </View>
        <Formik
            initialValues={{ name: '', email: '', password: '', confirmpassword: '', is_mechanic: null }}
            validationSchema={RegisterSchema}
            onSubmit={values => {
                handleRegister(values)
            }}
        >
            {({ handleChange, handleBlur, handleSubmit,setFieldValue, values, errors, touched }) => (
                <View style={styles.containerInputs}>
                    <GroupInput
                        option={1}
                        label={"Nombre"}
                        placeholder={"Jonh De Jesus"}
                        value={values.name}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                    />
                    {errors.name && touched.name ? (
                        <Text style={styles.errorText}>{errors.name}</Text>
                    ) : null}
                    <GroupInput
                        option={1}
                        label={"Correo electrónico"}
                        placeholder={"Johndoe@example.com"}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                    />
                    {errors.email && touched.email ? (
                        <Text style={styles.errorText}>{errors.email}</Text>
                    ) : null}
                    <GroupInput
                        option={3}
                        label="Contraseña"
                        placeholder="Contraseña"
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        secureTextEntry
                    />
                    {errors.password && touched.password ? (
                        <Text style={styles.errorText}>{errors.password}</Text>
                      ) : null}
                    <GroupInput
                        option={3}
                        label="Confirmar contraseña"
                        placeholder="Confirmar contraseña"
                        value={values.confirmpassword}
                        onChangeText={handleChange('confirmpassword')}
                        onBlur={handleBlur('confirmpassword')}
                        secureTextEntry
                        />
                      {errors.confirmpassword && touched.confirmpassword ? (
                        <Text style={styles.errorText}>{errors.confirmpassword}</Text>
                      ) : null}
                      <Text style={styles.label}>Rol</Text>
                      <RNPickerSelect
                        onValueChange={(value) => setFieldValue('is_mechanic', value)}
                        value={values.is_mechanic}
                        items={items}
                        useNativeAndroidPickerStyle={false}
                        style={{
                          inputIOS: styles.inputIOS,
                          inputAndroid: styles.inputAndroid,
                          iconContainer: styles.iconContainer,
                      }}
                      Icon={() => {
                        return <FontAwesome name="chevron-down" size={24} color="black" />;
                      }}
                        />
                    {errors.is_mechanic && touched.is_mechanic && <Text style={styles.errorText}>{errors.is_mechanic}</Text>}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>

        {/* <TouchableOpacity style={{
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
            <Image source={Google} style={{}} />
            <Text style={{
                color: '#000',
                fontSize: 16,
            }}>Inicie sesión usando Google</Text>
        </TouchableOpacity> */}
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
      marginTop: '5%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      width: '100%',
      height: '100%',
      backgroundColor: '#E8ECF5',
  },
  text: {
      fontSize: 32,
      fontWeight: 'bold',
  },
  imageContainer: {
      width: '40%',
      height: 100,
  },
  image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
  },
  containerInputs: {
      marginTop: '10%',
      flexDirection: 'column',
      width: '100%',
      gap: 30
  },
  button: {
      marginTop: '2%',
      width: '100%',
      backgroundColor: '#126EC0',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
  },
  errorText: {                    
      fontSize: 12,
      color: 'red',
  },
  // estilos para el select
  label:{
    fontSize: 16,
    color: '#000',
    },
  inputIOS: {
    fontSize: 16,
    padding: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 8,
    color: 'black',
    backgroundColor: '#FFF',
    paddingRight: 30, // to ensure the text is never behind the icon
},
inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 8,
    color: 'black',
    backgroundColor: '#FFF',
    paddingRight: 30, // to ensure the text is never behind the icon
},
iconContainer: {
    top: 10,
    right: 12,
},
});
