import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from './src/screens/Home';
import { WorkShop } from './src/screens/Workshop';


const Tab = createBottomTabNavigator(); //Este es el footer
const Stack = createNativeStackNavigator(); //Este es el ruteador


function App() {
  return (

    <NavigationContainer>
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
          name='Workshop' 
          component={WorkShop} 
          options={{
           headerShown: true,
            headerStyle:{backgroundColor:'#1C6FD1'}
          }}
         />
      </Tab.Navigator>
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
