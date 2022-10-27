import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryBooks from './views/screens/HistoryBooks';
import HomeScreen from './views/screens/HomeScreen';
import ProfileScreen from './views/screens/ProfileScreen';
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './views/screens/DetailsScreen';
import ChooseSchool from './views/screens/ChooseSchool';
import Registration from './views/screens/Registration';
import Login from './views/screens/Login';
import OnBoardScreen from './views/screens/OnBoardScreen';
import EditProfile from './views/screens/EditProfile';
import UpdateSchool from './views/screens/UpdateSchool';
import AllCampusScreen from './views/screens/AllCampusScreen';
import OffCampusHostel from './views/screens/OffCampusHostel';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabBars = () => {
    return(
        <Tab.Navigator
        initialRouteName='Main'
        backBehavior='history'
        screenOptions={{
            tabBarActiveTintColor: 'black'
        }}>
        <Tab.Screen options={{
            tabBarIcon: ({ focued, color }) => <AntDesign name="home" size={21} color={color} />
        }} tab name="Home" component={HomeScreen} />
        <Tab.Screen options={{
            tabBarIcon: ({ focued, color }) => <AntDesign name="folderopen" size={21} color={color} />
        }} name="Bookings" component={HistoryBooks} />
        <Tab.Screen options={{
            tabBarIcon: ({ focued, color }) => <AntDesign name="user" size={21} color={color} />
        }} name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
    )
}   

const Router = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegistrationScreen" component={Registration} />
        <Stack.Screen name="ChooseSchoolScreen" component={ChooseSchool} />
        </Stack.Group>

        <Stack.Group>
        <Stack.Screen name="Main" component={BottomTabBars} />
        <Stack.Screen name="AllCampusScreen" component={AllCampusScreen} />
        <Stack.Screen name="OffCampusHostel" component={OffCampusHostel}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="RecentBookedScreen" component={HistoryBooks} />
        <Stack.Screen name="EditProfileScreen" component={EditProfile} />
        <Stack.Screen name="UpdateSchoolScreen" component={UpdateSchool} />

        </Stack.Group>
    </Stack.Navigator>
    )
}
export default Router;