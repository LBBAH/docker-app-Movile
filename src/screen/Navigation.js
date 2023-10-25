import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import RContraseña from './RecuperarContraseña/RContraseña';
import PreguntaSecreta from './RecuperarContraseña/PreguntaSecreta';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
      <Stack.Navigator initialRouteName="Login" >
         <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
         <Stack.Screen name="Restore" component={RContraseña} options={{title:"Recuperación de contraseña", headerShown: false}} />
        <Stack.Screen name="Pregunta" component={PreguntaSecreta} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  }