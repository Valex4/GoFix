import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CardHelp } from '../components/CardHelp';
import imagen from "../../assets/favicon.png"

export const FAQ = () =>{
    return(
        <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: "#F0F1F4", padding:10}}>
            <View style={{padding: 20, borderColor: 'blue', backgroundColor: '#FFFFFF', width: '100%', borderRadius: 10, gap: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginLeft: 10}}>
                ¿Que problema tiene?                
                </Text>
                <View style={{display: 'flex', gap: 10}}>
                    <CardHelp name={"Llanta ponchada"} imageSource={imagen}/>
                    <CardHelp name={"Automovil parado"} imageSource={imagen}/>
                    <CardHelp name={"Falla mecánica"} imageSource={imagen}/>
                    <CardHelp name={"Llanta ponchada"} imageSource={imagen}/>
                    <CardHelp name={"Llanta ponchada"} imageSource={imagen}/>
                    <CardHelp name={"Nancy se durmio"} imageSource={imagen}/>
                </View>
                
            </View>
        </View>
    )
}