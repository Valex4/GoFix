import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card } from '../components/Shared/Card';
import { getWorkshop } from '../api/routes';

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

export const WorkShop = ({ route }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { token, userId } = await getUserData();
      if (!token || !userId) {
        throw new Error('No se encontró token o ID de usuario');
      }
      const response = await getWorkshop(userId);
      console.log("imprimiendo el response ", response.data); // Verifica la estructura aquí
      if (response.status === 200) {
        setData(response.data.data); // Ajusta según la estructura de la respuesta
      } else {
        console.error('Error en la respuesta de la API');
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <Card
      option={1}
      nameWorkshop={item.name}
      rate={5}
      direction={item.address}
      description={item.description}
      nameService={route.params.nameService}
    />
  );

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <View style={{ paddingTop: 20, alignItems: 'flex-start', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, marginLeft: 10 }}>
          Seleccione un taller
        </Text>
      </View>
      <View style={{ paddingTop: 10, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <View style={styles.container}>
          <Ionicons name="search-outline" size={20} color="gray" style={styles.icon} />
          <TextInput
            placeholder="Buscar taller"
            style={styles.input}
          />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          style={{ width: '100%' }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CACACA',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
});
