import { View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card } from '../components/Shared/Card';

export const Services = () => {
    return(
        <>
            <View style={{ paddingTop: 20 ,alignItems: 'left', justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 10}}>
                    Seleccione un servicio
                </Text>
           
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
                    <Card option={2} name={"Cambio de aceite"}  description={"El cambio de aceite en su vehiculo es muy importante, porque benefia a su motor"}/>
                    <Card option={2} name={"Cambio de llanta"}  description={"El cambio de aceite en su vehiculo es muy importante, porque benefia a su motor"}/>
                    <Card option={2} name={"Cambio de balatas"}  description={"El cambio de aceite en su vehiculo es muy importante, porque benefia a su motor"}/>
                    <Card option={2} name={"Revisión general"}  description={"El cambio de aceite en su vehiculo es muy importante, porque benefia a su motor"}/>
            </ScrollView>
            </View>
        </>
    )
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