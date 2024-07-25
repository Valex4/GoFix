import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { getUser, updateUser, deleteUser } from '../../api/routes';
import { GroupInput } from '../../components/Shared/GroupInput';

const getUserData = async () => {
    try {
      const token = await AsyncStorage.getItem('@user_token');
      const userId = await AsyncStorage.getItem('@user_id');
      if (!token || !userId) {
        throw new Error('No se encontró token o ID de usuario');
      }
      return { token, userId };
    } catch (error) {
      console.error('Error retrieving user data:', error);
      throw error;
    }
  };
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obligatorio'),
    email: Yup.string().email('Correo electrónico inválido'),
    password: Yup.string().min(
      6,
      'La contraseña debe tener al menos 6 caracteres'
    ),
    confirmpassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Las contraseñas deben coincidir'
    ),
  });

export const Profile = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      try {
        const { userId } = await getUserData();
        if (!userId) {
          throw new Error('No se encontró ID de usuario');
        }
        const response = await getUser(userId);
        console.log('imprimiendo el response ', response.data);
        if (response.status === 200) {
          setUserData(response.data.data); // Ajusta según la estructura de la respuesta
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleSubmit = async (values, { setSubmitting }) => {
      const { token, userId } = await getUserData();
      if (!token || !userId) {
        throw new Error('No se encontró token o ID de usuario');
      }
      const objectDataFront = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
      };
      console.log('Imprimiendo el objeto despues del formateo');
      console.log(objectDataFront);
      try {
        const response = await updateUser(userId, objectDataFront);
        console.log(response.data);
        console.log(response.status);
        if (response.status == 200) {
          Alert.alert('Se actualizaron con éxito los valores');
          setUserData(response.data.data);
        }
      } catch (error) {
        console.log('Error al mandar los datos', error);
      } finally {
        setSubmitting(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    if (loading) {
      return <Text>Cargando...</Text>;
    }
  
    const handleDelete = async () => {
      const { token, userId } = await getUserData();
      if (!token || !userId) {
        throw new Error('No se encontró token o ID de usuario');
      }
      try {
          const response = await deleteUser(userId);
          console.log(userId)
        console.log(response.status);
        if (response.status == 200) {
          navigation.navigate('Login', { Login });
        }
      } catch (error) {
        console.log('Error al mandar los datos', error);
      }
    };
  
    return (
      <KeyboardAwareScrollView
        style={{ width: '100%', backgroundColor: '#E8ECF5', paddingTop: '10%' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={true}
      >
        <View style={styles.formContainer}>
          <Text style={styles.text}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                marginLeft: 10,
                color: '#000',
              }}
            >
              Datos personales
            </Text>
          </Text>
          <Formik
            initialValues={{
              name: userData?.name || '',
              email: userData?.email || '',
              phone: userData?.phone || '',
              password: '',
              confirmpassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => {
  
              // Este useEffect se asegura de que los valores se actualicen
              useEffect(() => {
                if (userData) {
                  setFieldValue('name', userData.name);
                  setFieldValue('email', userData.email);
                  setFieldValue('phone', userData.phone);
                }
              }, [userData]);
  
              return (
                <>
                  <GroupInput
                    option={1}
                    label={'Nombre'}
                    placeholder="Nombre"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />
                  {errors.name && touched.name ? (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  ) : null}
                  <GroupInput
                    option={4}
                    label={'Número de teléfono'}
                    placeholder="Número de teléfono"
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                  />
                  {errors.phone && touched.phone ? (
                    <Text style={styles.errorText}>{errors.phone}</Text>
                  ) : null}
                  <GroupInput
                    option={1}
                    label={'Correo electrónico'}
                    placeholder="Correo electrónico"
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
                  <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Actualizar</Text>
                  </TouchableOpacity>
                </>
              );
            }}
          </Formik>
          <TouchableOpacity onPress={handleDelete} style={styles.buttonRed}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Eliminar cuenta</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#E8ECF5',
      height: '100%',
    },
    formContainer: {
      padding: 20,
      borderColor: 'blue',
      backgroundColor: '#FFFFFF',
      width: '100%',
      borderRadius: 10,
      gap: 20,
      marginBottom: 40,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 25,
      marginLeft: 10,
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: -10,
      marginBottom: 10,
    },
    textarea: {
      textAlignVertical: 'top', // Asegura que el texto comience desde la parte superior del área de texto
    },
    button: {
      backgroundColor: '#1C6FD1',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonRed: {
      backgroundColor: '#FF0000',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    boldText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
