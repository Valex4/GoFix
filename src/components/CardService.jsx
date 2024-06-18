import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Imagen from '../../assets/ImageCard.jpg'

export const CardService = () => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={Imagen} // Aquí deberías poner la URL de tu imagen
                    style={styles.image}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Servicio Automotriz Sanchez</Text>
                <View style={styles.ratingContainer}>
                    {[...Array(4)].map((_, index) => (
                        <FontAwesome key={index} name="star" size={20} color="gold" />
                    ))}
                    <FontAwesome name="star-half" size={20} color="gold" />
                    <Text style={styles.rating}>4.8</Text>
                </View>
                <Text style={styles.address}>456 Oak St, Anytown USA</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Seleccionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        overflow: 'hidden',
        width: '100%',
        marginTop: 20
    },
    imageContainer: {
        width: '100%',
        height: 150,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    infoContainer: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    rating: {
        marginLeft: 5,
        fontSize: 16,
        color: '#333',
    },
    address: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CardService;
