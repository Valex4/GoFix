import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from './src/screens/Home';
import { WorkShop } from './src/screens/Workshop';
import { Services } from './src/screens/Services';
import { FAQ } from './src/screens/FAQ';
import { Checkout } from './src/screens/Checkout';
import { Login } from './src/screens/Login/Login';
import { Register } from './src/screens/Register/Register';
import { UpdatePassword } from './src/screens/UpdatePassword/UpdatePassword';
import { CodeVerification } from './src/screens/CodeVerification/CodeVerification';
import { NewPassword } from './src/screens/NewPassword/NewPassword'; 

const Tab = createBottomTabNavigator(); // Este es el footer
const Stack = createNativeStackNavigator(); // Este es el ruteador

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Workshop') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Services') {
            iconName = focused ? 'build' : 'build-outline';
          } else if (route.name === 'FAQ') {
            iconName = focused ? 'accessibility' : 'accessibility-outline';
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1C6FD1',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#1C6FD1' },
          headerTintColor: 'white'
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#1C6FD1' },
          headerTintColor: 'white'
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQ}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#1C6FD1' },
          headerTintColor: 'white'
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerBackTitle: 'Regresar',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: '#1C6FD1' },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#1C6FD1' },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="UpdatePassword"
          component={UpdatePassword}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#1C6FD1' },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="CodeVerification"
          component={CodeVerification}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#1C6FD1' },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#1C6FD1' },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="WorkShop"
          component={WorkShop}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#1C6FD1' },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#1C6FD1' },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
