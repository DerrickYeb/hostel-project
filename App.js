import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import COLORS from './src/consts/colors';
import Login from './src/views/screens/Login';
import Registration from './src/views/screens/Registration';
import ChooseSchool from './src/views/screens/ChooseSchool';
import { NativeBaseProvider } from 'native-base';
import HistoryBooks from './src/views/screens/HistoryBooks';
import Router from './src/index.routes';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="RegistrationScreen" component={Registration} />
          <Stack.Screen name="ChooseSchoolScreen" component={ChooseSchool} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="RecentBookedScreen" component={HistoryBooks} />
        </Stack.Navigator> */}
        <Router/>
      </NavigationContainer>
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
