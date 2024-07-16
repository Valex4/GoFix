import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const GroupInput = ({ label, placeholder, value, onChangeText, option, text}) => {
  const navigation  = useNavigation() 
  const [secureText, setSecureText] = React.useState(true);

    const renderInput = () =>{
        switch(option){
            case 1:
              return(
                <View style={styles.containerInput}>
                  <Text style={styles.label}>{label}</Text>
                  <TextInput style={styles.input}
                  placeholder={placeholder}
                  value={value}
                  onChangeText={onChangeText}
                  />
                </View>
                );
            case 2: 
              return(
                <View style={styles.containerInput}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureText}
                  />
                  <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                    {/* <Icon
                      name={secureText ? "eye-off" : "eye"}
                      size={24}
                      color="grey"
                      style={styles.eyeIcon}
                    /> */}
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('UpdatePassword')}>
                  <Text style={styles.forgotPassword}>{text}</Text>
                </TouchableOpacity>
              </View>
              );
              case 3: 
              return(
                <View style={styles.containerInput}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureText}
                  />
                  <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                    {/* <Icon
                      name={secureText ? "eye-off" : "eye"}
                      size={24}
                      color="grey"
                      style={styles.eyeIcon}
                    /> */}
                  </TouchableOpacity>
                </View>
              </View>
              );
            default:
              return null;
          }
        };
    return renderInput();
  };


const styles = StyleSheet.create({
  containerInputLink:{
    gap:3
},
label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
input: {
    padding: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    width: '100%',
    color:'#A9A9A9',
    fontSize: 17,
    borderRadius: 4
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 4,
    width:'100%'
  },
  eyeIcon: {
    padding: 10,
  },
  forgotPassword: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#1C6FD1',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});