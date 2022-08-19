import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MyDrawer from './Drawer';

const Stack = createNativeStackNavigator();


const Mainstack = () => {
    return (
        <Stack.Navigator screenOptions={({route}) => ({headerShown: false})}>
            <Stack.Screen name="Home" component={MyDrawer} />
            {/* <Stack.Screen name="Home" component={Home} /> */}
        </Stack.Navigator>
    )
}

export default Mainstack;