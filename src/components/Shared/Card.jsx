import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ImagenTaller from '../../../assets/ImageCard.jpg'
import aceite from '../../../assets/CardOil.jpg'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


export const Card = ({nameService, nameWorkshop, option, description, rate, direction}) =>{
    
    const navigation  = useNavigation() 
    const renderCards = () =>{
        switch(option){
            case 1: 
                return(
                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={ImagenTaller} // Aquí deberías poner la URL de tu imagen
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{nameWorkshop}</Text>
                        <View style={styles.ratingContainer}>
                            {[...Array(rate)].map((_, index) => (
                                <FontAwesome key={index} name="star" size={20} color="gold" />
                            ))}
                            <Text style={styles.rating}>{rate}</Text>
                        </View>
                        <Text style={styles.address}>{direction}</Text>
                        <TouchableOpacity style={styles.button} onPress={()=> {
                            navigation.navigate("Checkout", {
                            nameService,
                            nameWorkshop,
                            direction,
                            phone: 12345679
                        })}}>
                            <Text style={styles.buttonText}>Seleccionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                )
            case 2:
                return(
                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={aceite} // Aquí deberías poner la URL de tu imagen
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{nameService}</Text>
                        <Text style={styles.address}>{description}</Text>
                        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("WorkShop", { nameService })}>
                            <Text style={styles.buttonText}>Seleccionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                )
            default:
    
        }
    }
    
    return (
        renderCards()
    );
}

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