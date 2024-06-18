import { View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import CardService from '../components/CardService';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const HomeScreen = ({ navigation }) =>{ 
    return (
      <>
      <View style={{ paddingTop: 20 ,alignItems: 'left', justifyContent: 'center' }}>
        <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 10}}>
            Seleccione un taller
        </Text>
        {/* <Button
            title="Ir al taller"
            onPress={() => navigation.push('Workshop')}
        /> */}
      </View>
      <View style={{ paddingTop:10 ,alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <View style={styles.container}>
            <Ionicons name="search-outline" size={20} color="gray" style={styles.icon} />
            <TextInput
                placeholder="Buscar servicio"
                style={styles.input}
            />
        </View>
          <ScrollView style={{width:"100%"}}>
            <CardService/>
            <CardService/>
            <CardService/>
          </ScrollView>
      </View>
      </>
    );
  }
  

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