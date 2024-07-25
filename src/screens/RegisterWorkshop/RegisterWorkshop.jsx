import { View, StyleSheet, Text, TouchableOpacity, Alert, Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { GroupInput } from '../../components/Shared/GroupInput';
import { registerWorkshop } from '../../api/routes.js'
import Logo from '../../../assets/logo.jpg';
import Google from '../../../assets/google.jpg';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
  postalCode: Yup.string().required('Campo requerido'),
//   openingHours: Yup.string().required('Campo requerido'),
//   closingHours: Yup.string().required('Campo requerido'),
  description: Yup.string().required('Campo requerido'),
});

const getUserData = async () => {
  try {
    const token = await AsyncStorage.getItem('@user_token');
    const userId = await AsyncStorage.getItem('@user_id');
    if (!token || !userId ) {
      throw new Error('No se encontró token o ID de usuario');
    }
    return { token, userId };
  } catch (error) {
    console.error('Error retrieving user data:', error);
    throw error;
  }
};

export const RegisterWorkshop = () => {
  const handleSubmit = async (values) => {
     try {
        Alert.alert('Holiiiii');
      console.log("imprimiendo los valores antes de formatearlo ",values)
     const openingHours = moment(values.openingHours).format('YYYY-MM-DDTHH:mm:ss[Z]');
     const closingHours = moment(values.closingHours).format('YYYY-MM-DDTHH:mm:ss[Z]');

    console.log("imprimiendo la hora de abertura ",values.openingHours)
    console.log("imprimiendo la hora de cierre ",values.closingHours)
      const { token, userId } = await getUserData();
      if (!token || !userId ) {
        throw new Error('No se encontró token o ID de usuario');
      }
      const objectDataFront = {
        name: values.name,
        address: values.address,
        postalCode: values.postalCode,
        openingHours: '2024-07-05T09:00:00Z',
        closingHours: '2024-07-05T09:00:00Z',
        description: values.description,
        id_user: userId,
      };
      console.log("imprimiendo los valores despues de formatearlo ",objectDataFront)
      const response = await registerWorkshop(objectDataFront);
      console.log('Imprimiendo el response ', response.data);
      // if( response.status == 200 ){
      //     Alert.alert('Éxito', 'Los datos se han registrado correctamente');
      // }
      console.log(response.status);
    } catch (error) {
      console.log('Error: ', error);
      Alert.alert('Error', 'Hubo un problema al registrar los datos. Por favor, intenta de nuevo.');
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
          <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 10, color: '#000' }}>GO</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 32, marginLeft: 10, color: '#126EC0' }}>FIX</Text>
        </Text>
        <Formik
          initialValues={{ name: '', address: '', postalCode: '', openingHours: new Date(), closingHours: new Date(), description: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
            <>
              <GroupInput
                option={5}
                label={'Nombre del taller'}
                placeholder={''}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
              <GroupInput
                option={5}
                label={'Dirección'}
                placeholder={''}
                value={values.address}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
              />
              {touched.address && errors.address && (
                <Text style={styles.errorText}>{errors.address}</Text>
              )}
              <GroupInput
                option={4}
                label={'Código postal'}
                placeholder={''}
                value={values.postalCode}
                onChangeText={handleChange('postalCode')}
                onBlur={handleBlur('postalCode')}
              />
              {errors.postalCode && touched.postalCode ? (
                <Text style={styles.errorText}>{errors.postalCode}</Text>
              ) : null}
              <GroupInput
              option={7}
              label={'Horario de apertura'}
              value={values.openingHours}
              onChange={(time) => {
                if (time instanceof Date && !isNaN(time)) {
                  console.log('Opening time selected:', time);
                  setFieldValue('openingHours', time);
                } else {
                  console.error('Valor de tiempo inválido:', time);
                }
              }}
              onBlur={handleBlur('openingHours')}
            />
            {errors.openingHours && touched.openingHours ? (
              <Text style={styles.errorText}>{errors.openingHours}</Text>
            ) : null}
            
            <GroupInput
              option={7}
              label={'Horario de cierre'}
              value={values.closingHours}
              onChange={(time) => {
                if (time instanceof Date && !isNaN(time)) {
                  console.log('Opening time selected:', time);
                  setFieldValue('closingHours', time);
                } else {
                  console.error('Valor de tiempo inválido:', time);
                }
              }}
              onBlur={handleBlur('closingHours')}
            />
            {errors.closingHours && touched.closingHours ? (
              <Text style={styles.errorText}>{errors.closingHours}</Text>
            ) : null}

              <GroupInput
                option={6}
                label={'Descripción'}
                placeholder={''}
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                multiline={true}
                numberOfLines={4}
                style={styles.textarea} // Aplica estilos específicos para textarea
              />
              {errors.description && touched.description ? (
                <Text style={styles.errorText}>{errors.description}</Text>
              ) : null}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Registrar</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
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
  },
  formContainer: {
    padding: 20,
    borderColor: 'blue',
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 10,
    gap: 20,
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
});
