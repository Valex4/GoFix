import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'; 
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

export const Checkout = ({route}) => {
    const [date, setDate] = useState(new Date());
    const [message, setMessage] = useState('');
    const scrollViewRef = useRef(null);
    const {nameService, nameWorkshop, direction, phone} = route.params;
    const navigation  = useNavigation() 

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const handleAccept = () => {
        const checkoutData = { 
            service: nameService,
            workshop: nameWorkshop,
            address: direction,
            phoneNumber: phone,
            appointmentDate: date,
            message: message
        };

        // Aquí puedes enviar la información al mecánico, por ejemplo, a través de una API
        console.log(checkoutData);
        alert('Información enviada al mecánico');
        navigation.navigate("Home")

    };
    const handleReject = () => {
        // Lógica para rechazar
        alert('Solicitud rechazada');
        navigation.navigate("Services")
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView 
                contentContainerStyle={styles.container}
                ref={scrollViewRef}
            >
                <View style={styles.Card}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: "center" }}>
                        Verifique la información
                    </Text>
                    <Text style={styles.Text}>Servicio solicitado: <Text style={styles.P}>{nameService}</Text></Text>
                    <Text style={styles.Text}>Taller Mécanico: <Text style={styles.P}>{nameWorkshop}</Text></Text>
                    <Text style={styles.Text}>Dirección: <Text style={styles.P}>{direction}</Text></Text>
                    <Text style={styles.Text}>Teléfono del taller: <Text style={styles.P}>{phone}</Text></Text>
                    <Text style={styles.Text}>Fecha de cita: 
                        <Text style={styles.P}>
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                style={{marginTop: -10}}
                                onChange={onDateChange}
                            />
                        </Text>
                    </Text>
                    <Text style={styles.Text}>Mensaje:</Text>
                    <TextInput
                        style={styles.TextArea}
                        multiline
                        numberOfLines={4}
                        value={message}
                        onChangeText={setMessage}
                        placeholder='Escriba aquí'
                        onFocus={() => {
                            setTimeout(() => {
                                scrollViewRef.current.scrollToEnd({ animated: true });
                            }, 200);
                        }}
                    />
                    <View style={styles.ButtonContainer}>
                        <TouchableOpacity style={[styles.Buttons, styles.RejectButton]} onPress={handleReject}>
                            <Text style={styles.RejectButtonText}>Rechazar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.Buttons, styles.AcceptButton]} onPress={handleAccept}>
                            <Text style={styles.AcceptButtonText}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 40
    },
    Card: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        borderRadius: 20,
        shadowColor: "#939393",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        gap: 30,
        padding: 20,
    },
    Text: {
        fontSize: 18,
        fontWeight: "bold",
    },
    P: {
        fontSize: 18,
        fontWeight: "300",
    },
    TextArea: {
        height: 100,
        borderColor: '#cccccc',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        borderRadius: 10
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Buttons: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    RejectButton: {
        borderColor: '#FB4440',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    RejectButtonText: {
        color: '#FB4440',
        fontWeight: 'bold',
    },
    AcceptButton: {
        backgroundColor: '#157EFB',
    },
    AcceptButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
