import { View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card } from '../components/Shared/Card';

export const WorkShop = ({route}) =>{

    const { nameService } = route.params;

    return(
        <>
            <View style={{ paddingTop: 20 ,alignItems: 'left', justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 10}}>
                    Seleccione un taller
                </Text>
           
            </View>
            <View style={{ paddingTop:10 ,alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <View style={styles.container}>
                    <Ionicons name="search-outline" size={20} color="gray" style={styles.icon} />
                    <TextInput
                    placeholder="Buscar taller"
                    style={styles.input}
                    />
                </View>
            <ScrollView style={{width:"100%"}}>
                <Card option={1} nameWorkshop={"Taller 'El colocho' "} rate={5} direction={"Avenida las palmas, #339 Tuxtla Gutiérrez"} nameService={nameService}/>
                <Card option={1} nameWorkshop={"Taller La tuerca"} rate={4} direction={"Por suchiapa XD"} nameService={nameService}/>
                <Card option={1} nameWorkshop={"Taller Ferras"} rate={2} direction={"Por suchiapa XD"} nameService={nameService}/>
                <Card option={1} nameWorkshop={"Taller surimbo"} rate={2} direction={"Por suchiapa XD"} nameService={nameService}/>
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