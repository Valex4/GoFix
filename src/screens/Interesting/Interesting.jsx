import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { GroupInput } from '../../components/Shared/GroupInput';
import { registerInteresting } from '../../api/routes'; 

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('El título es requerido'),
    description: Yup.string()
        .required('La descripción es requerida')
});

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

export const Interesting = () => {
 const handleSubmit = async (values) => {
        try{
            const { token, userId } = await getUserData();
            if (!token || !userId) {
                throw new Error('No se encontró token o ID de usuario');
            }
            const objectDataFront = {
                id_user: userId,
                title: values.title,
                description: values.description
              }
            const response = await registerInteresting(objectDataFront);
            console.log("Imprimiendo el response ",response.data)
            Alert.alert("Éxito", "Los datos se han registrado correctamente");
        }catch(error){
           console.log("Error: ", error)
           Alert.alert("Error", "Hubo un problema al registrar los datos. Por favor, intenta de nuevo.");
     }
 };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                
                <Text style={styles.title}>Datos interesantes</Text>
                <Formik
                    initialValues={{ title: '', description: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <GroupInput
                                option={5}
                                label={"Título"}
                                placeholder={"Introduce el título"}
                                value={values.title}
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                            />
                            {touched.title && errors.title && (
                                <Text style={styles.errorText}>{errors.title}</Text>
                            )}
                            <GroupInput
                                option={6}
                                label={"Descripción"}
                                placeholder={"Introduce la descripción"}
                                value={values.description}
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                            />
                            {touched.description && errors.description && (
                                <Text style={styles.errorText}>{errors.description}</Text>
                            )}
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Registrar</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F0F1F4",
        padding: 10
    },
    formContainer: {
        padding: 20,
        borderColor: 'blue',
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderRadius: 10,
        gap: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 10
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: -10,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#1C6FD1',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

