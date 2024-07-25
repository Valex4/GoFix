import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const GroupInput = ({ label, placeholder, value, onChangeText, option, text, onChange, onBlur}) => {
  const navigation  = useNavigation() 
  const [secureText, setSecureText] = React.useState(true);

  const [date, setDate] = useState(value instanceof Date ? value : new Date());
  const [dateClosing, setDateClosing] = useState(value instanceof Date ? value : new Date());

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    onChange(currentDate);
  };

  const handleChangeClosing = (event, selectedDate) => {
    const currentDate = selectedDate || dateClosing;
    setDateClosing(currentDate);
    onChange(currentDate);
  };

  const renderTimePicker = () => {
    return (
      <ScrollView>
        <View style={styles.containerInput}>
          <Text style={styles.label}>{label}</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.input}>
          </TouchableOpacity>
            <DateTimePicker
              value={new Date()}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleChange}
            />
        </View>
      </ScrollView>
    );
  };

  const renderTimePickerClosing = () => {
    return (
      <ScrollView>
        <View style={styles.containerInput}>
          <Text style={styles.label}>{label}</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.input}>
          </TouchableOpacity>
            <DateTimePicker
              value={new Date()}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleChangeClosing}
            />
        </View>
      </ScrollView>
    );
  };
    const renderInput = () =>{
        switch(option){
            case 1:
              return(
                <ScrollView style={styles.containerInput}>
                  <Text style={styles.label}>{label}</Text>
                  <TextInput style={styles.input}
                  placeholder={placeholder}
                  value={value}
                  onChangeText={onChangeText}
                  />
                </ScrollView>
                );
            case 2: 
              return(
                <ScrollView style={styles.containerInput}>
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
              </ScrollView>
              );
              case 3: 
              return(
                <ScrollView style={styles.containerInput}>
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
              </ScrollView>
              );
              case 4:
                return(
                  <ScrollView style={styles.containerInput}>
                    <Text style={styles.label}>{label}</Text>
                    <TextInput style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType="numeric"
                    />
                  </ScrollView>
                  );
              case 5: 
                return(
                  <ScrollView style={styles.containerInput}>
                    <Text style={styles.label}>{label}</Text>
                    <TextInput style={styles.inputV}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    />
                  </ScrollView>
                  );
                  case 6: 
                  return(
                    <ScrollView>
                    <View style={styles.containerInput}>
                      <Text style={styles.label}>{label}</Text>
                      <TextInput style={styles.textArea}
                      placeholder={placeholder}
                      value={value}
                      onChangeText={onChangeText}
                      />
                    </View>
                      </ScrollView>
                    );
                case 7:
                 return renderTimePicker();
                case 8:
                 return renderTimePickerClosing();
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
    borderRadius: 4,
    textAlignVertical: 'top'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 4,
    width:'100%',
    textAlignVertical: 'top'
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
    textAlignVertical: 'top'
  },
  inputV: {
    padding: 12,
    backgroundColor: '#F7F7F7',
    fontSize: 16,
    width: '100%',
    color:'#A9A9A9',
    fontSize: 17,
    borderRadius: 4,
    borderColor: '#D8DCE1',
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  textArea: {
    width: '100%',
    height: 90,
    padding: 10,
    backgroundColor: '#F7F7F7',
    fontSize: 16,
    borderColor: '#D8DCE1',
    borderWidth: 1,
    borderRadius: 4,
    color:'#A9A9A9',
    fontSize: 17,
    textAlignVertical: 'top',
  }
});