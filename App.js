import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from './src/screens/Home';
import { WorkShop } from './src/screens/Workshop';
import { Services } from './src/screens/Services';
import { FAQ } from './src/screens/FAQ';
import { Checkout } from './src/screens/Checkout';


const Tab = createBottomTabNavigator(); //Este es el footer
const Stack = createNativeStackNavigator(); //Este es el ruteador


function TabNavigator() {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Workshop') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }else if (route.name === 'Services') {
            iconName = focused ? 'build' : 'build-outline';
          }else if (route.name === 'FAQ') {
            iconName = focused ? 'accessibility' : 'accessibility-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1C6FD1',
        inactiveTintColor: 'gray',
        showLabel: true,
      }}
      >
        <Tab.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{ 
            headerShown: true, 
            headerStyle: { backgroundColor: '#1C6FD1'}, 
          }}
          />
          <Tab.Screen
          name='Services' 
          component={Services} 
          options={{
           headerShown: true,
            headerStyle:{backgroundColor:'#1C6FD1'}
          }}
         />
        {/* <Tab.Screen
          name='Workshop' 
          component={WorkShop} 
          options={{
           headerShown: true,
            headerStyle:{backgroundColor:'#1C6FD1'}
          }}
         /> */}
         <Tab.Screen
          name='FAQ' 
          component={FAQ} 
          options={{
           headerShown: true,
            headerStyle:{backgroundColor:'#1C6FD1'}
          }}
         />
      </Tab.Navigator>
  )
}


function App() {
  return (

    <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={TabNavigator} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WorkShop"
          component={WorkShop}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#1C6FD1' },
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#1C6FD1' },
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
