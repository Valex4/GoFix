import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GroupInput } from '../../components/Shared/GroupInput';
import { loginUser } from '../../api/routes.js'  
import Logo from '../../../assets/logo.jpg';
import Google from '../../../assets/google.jpg';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Campo obligatorio'),
  password: Yup.string().required('Campo obligatorio'),
});

export const Login = () => {
  const navigation = useNavigation();

  const handleLogin = async (values) => {
    Alert.alert("Datos ingresados", `Email: ${values.email}\nContraseña: ${values.password}`);
    console.log(values);
    try{
    const response = await loginUser(values);
    console.log("Imprimiendo el response")
    console.log(response.status)
    console.log(response.data)
    navigation.navigate("Root", {}) 
    }catch{
      console.log("Error: ", error)
    }
  };

  return (
    <ScrollView style={{ width: "100%", backgroundColor: '#E8ECF5', paddingTop:'10%' }}>
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 10, color: '#000' }}>GO</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 10, color: '#126EC0' }}>FIX</Text>
      </Text>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.image} />
      </View>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.containerInputs}>
            <GroupInput
              option={1}
              label={"Correo electrónico"}
              placeholder={"Johndoe@example.com"}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <GroupInput
              option={2}
              label="Contraseña"
              placeholder="Contraseña"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry
              text="¿Ha olvidado su contraseña?"
            />
            {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>

          </View>
        )}
      </Formik>
      {/* <TouchableOpacity style={styles.googleButton} onPress={() => { }}>
        <Image source={Google} style={{}} />
        <Text style={styles.googleButtonText}>Inicie sesión usando Google</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={{ marginTop: '7%' }}>
          <Text style={{ fontSize: 16, marginLeft: 10, color: '#000' }}>¿No tienes una cuenta?</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 10, color: '#126EC0' }}> Registrate</Text>
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 5,
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
    gap: 30,
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
  googleButton: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: '4%',
    width: '100%',
    height: '40%',
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#',
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: -20,
    marginBottom: 10,
    marginLeft: 10,
  },
});
