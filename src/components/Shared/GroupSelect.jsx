import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { FontAwesome } from '@expo/vector-icons';

function GroupSelect({ items, onValueChange, value }) {
    return (        
        <View style={styles.container}>
            <RNPickerSelect
                onValueChange={onValueChange}
                items={items}
                value={value}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
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