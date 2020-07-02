import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//BottomBar File
import BottomBar from './src/screens/BottomBar'
//Import File
import Dashboard from './src/screens/Dashboard';
import OptionDetail from './src/screens/optionDetail';
import Spin from './src/screens/BotomScrens/Spin'
import MyAccount from './src/screens/BotomScrens/My Account'
import Refer from './src/screens/BotomScrens/Refer'
import Setting from './src/screens/BotomScrens/Setting'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomBar {...props} />}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Spin" component={Spin} />
      <Tab.Screen name="MyAccount" component={MyAccount} />
      <Tab.Screen name="Refer" component={Refer} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Dashboard"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OptionDetail"
          component={OptionDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Spin"
          component={Spin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyAccount"
          component={MyAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Refer"
          component={Refer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
