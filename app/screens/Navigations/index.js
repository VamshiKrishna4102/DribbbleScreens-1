import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Home';
import StoreScreen from '../Store';
import FevoritesScreen from '../Favourites';
import {NavigationContainer} from '@react-navigation/native';
import RedirectScreens from '../Redirect';
import DummyScreen from '../Dummy';

const Stack = createStackNavigator();

function MyApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route, navigation}) => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Redirect" component={RedirectScreens} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="Favourites" component={FevoritesScreen} />
        <Stack.Screen name="Dummmy" component={DummyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyApp;
