import { View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const HomeScreen = () =>{ 
    return (
      <>
      <View style={{ paddingTop: 20 ,alignItems: 'left', justifyContent: 'center' }}>
        <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 10}}>
            Aca ira el mapa
        </Text>
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