import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { CardHelp } from '../components/CardHelp';
import { getInteresting } from '../api/routes'; 
import imagen from "../../assets/favicon.png"

export const FAQ = () =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const response = await getInteresting();
          if (response.data.status === 'success') {
            setData(response.data.data);
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
        <CardHelp
          name={item.title}
          imageSource={imagen}
          description={item.description}
        />
      );
    
      if (loading) {
        return <View><Text>Cargando...</Text></View>;
      }

    return(
        <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: "#F0F1F4", padding:10}}>
            <View style={{padding: 20, borderColor: 'blue', backgroundColor: '#FFFFFF', width: '100%', borderRadius: 10, gap: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 10}}>
                Datos interesantes               
                </Text>
                <View style={{display: 'flex', gap: 10}}>
                    <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                
            </View>
        </View>
    )
}