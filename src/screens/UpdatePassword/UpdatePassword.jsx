import React from 'react';
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GroupInput } from '../../components/Shared/GroupInput';
import Logo from '../../../assets/logo.jpg';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const UpdatePassword = () => {
    const navigation = useNavigation();
    
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Correo electrónico no válido')
            .required('El correo electrónico es requerido')
    });

    const handleNext = (values) => {
        Alert.alert("Datos ingresados", `Email: ${values.email}`);
        navigation.navigate("CodeVerification");
    };

    const handleCancel = () => {
        navigation.navigate("Login");
    };

    return (
        <ScrollView style={{ width: "100%", backgroundColor: '#E8ECF5' }}>
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
                <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#000', marginTop: 10 }}>Encuentra tu cuenta</Text>
                <Text style={{ fontSize: 17, color: '#A9A9A9', marginTop: 10 }}>Introduce el correo electrónico, asociados a tu cuenta para cambiar tu contraseña.</Text>
                
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleNext}
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
                            {touched.email && errors.email && (
                                <Text style={styles.errorText}>{errors.email}</Text>
                            )}
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Siguiente</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>

                <TouchableOpacity style={styles.buttonSecondary} onPress={handleCancel}>
                    <Text style={styles.buttonTextSecondary}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:'8%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%',
        backgroundColor: '#E8ECF5',
        gap: 5
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
        marginTop: '3%',
        flexDirection: 'column',
        width: '100%',
        gap: 25
    },
    button: {
        marginTop: '2%',
        width: '100%',
        height: '20%',
        backgroundColor: '#126EC0',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    buttonSecondary: {
        marginTop: '1%',
        width: '100%',
        height: '10%',
        borderWidth: 1,
        borderColor: '#126EC0',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonTextSecondary: {
        color: '#126EC0',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: -20,
        marginBottom: 20,
    },
});
