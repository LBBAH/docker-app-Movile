import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CommonActions, DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons'


import Home from './Home';
import Registro from './Registro';
import Cursos from './Cursos'
import QuienesSomos from './QuienesSomos'
import PerfilUsuario from './PerfilUsuario'
import Login from './Login'

import ContraUsuario from './ContraUsuario';
import MisDatos from './MisDatos';
import MisCursos from './MisCursos';
import ReproduccionCurso from './ReproduccionCurso';

import IndexCurso from './CursosDetalles/IndexCurso';
import EjemploApi from './CursosDetalles/EjemploApi';
import { createStackNavigator } from '@react-navigation/stack';
import { pestaniasTemario } from './CursosDetalles/IndexCurso';
import { ComprarRoute } from './CursosDetalles/IndexCurso';
import Usuarios_all from './BackEnd_Laravel/Usuarios_all';
import Usuarios_registro from './BackEnd_Laravel/Usuarios_registro';

import Navigation from './Navigation';
import interFazModal from './pruebas/interfazModal';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export function RutasDeLosCursos() {
  return (
    <Stack.Navigator initialRouteName="Main" >
      {/* <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}> */}
      <Stack.Screen name="Inicio" component={Cursos} />
      <Stack.Screen name="IndexCurso" component={IndexCurso} />
      <Stack.Screen name="Compra" component={ComprarRoute} />
      {/* <Stack.Screen name="IndexCurso" component={pestaniasTemario} /> */}
    </Stack.Navigator>
  );
}

export function RutasDePerfilUsuario() {
  return (
    <Stack.Navigator initialRouteName="Main" >
      {/* <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}> */}
      <Stack.Screen name="MisDatos" component={MisDatos} />
      <Stack.Screen name="MisCursos" component={MisCursos} />
      <Stack.Screen name="Contraseña" component={ContraUsuario} />
      <Stack.Screen name="ReproCurso" component={ReproduccionCurso}/>
      {/* <Stack.Screen name="IndexCurso" component={pestaniasTemario} /> */}
    </Stack.Navigator>
  );
}



export default function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: '#5F44B8',
          drawerActiveTintColor: '#ffff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            fontSize: 15
          }
        }}
      >
        <Drawer.Screen name="Home"
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={23} color={color}></Ionicons>
            )
          }}
          // component={Home}
          component={Registro}
          // component={EjemploApi}
          // component={Usuarios_all}
          // component={Usuarios_registro}
          // component={Registro}
          // component={QuienesSomos}
        />
        <Drawer.Screen name="Registro"
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-add-outline" size={23} color={color}></Ionicons>
            )
          }}
          component={Registro} />
        <Drawer.Screen name="Cursos"
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="laptop-outline" size={23} color={color}></Ionicons>
            ),
            // headerShown:false, //esto es para quitar el header
          }}
          component={RutasDeLosCursos}
          screenOptions={({ navigation }) => ({
            drawerLabel: 'Cursos',
            onPress: () => {
              navigation.navigate('Cursos'); // Navega a la pantalla "Cursos"
            },
          })}
        />

        {/* <Drawer.Screen name="BackEnd"
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="laptop-outline" size={23} color={color}></Ionicons>
            ),
            // headerShown:false, //esto es para quitar el header
          }}
          // component={RutasDeLosCursos}
          // component={Usuarios_all}
          component={interFazModal}
          screenOptions={({ navigation }) => ({
            drawerLabel: 'EjemploApi',
            onPress: () => {
              navigation.navigate('EjemploApi'); // Navega a la pantalla "Cursos"
            },
          })}
        /> */}


        <Drawer.Screen name="Quienes Somos"
        options={{          
          drawerIcon:({color})=>(        
            
            <Ionicons name="heart-half-outline" size={23} color={color}></Ionicons>
          )
        }}
        component={QuienesSomos} />    
        <Drawer.Screen name="Configuracion" 
        options={{          
          drawerIcon:({color})=>(                  
            <Ionicons name="settings-outline" size={23} color={color}></Ionicons>
          )
        }}
        component={PerfilUsuario} />
        <Drawer.Screen name="Login" 
          options={{          
            drawerIcon:({color})=>(   
              <Ionicons name="log-in" size={23} color={color}></Ionicons>
            )
          }}
          component={Navigation}

          screenOptions={({ navigation }) => ({
            drawerLabel: 'Login',
            onPress: () => {
              navigation.navigate('Login');
            },
          })}
        />



      </Drawer.Navigator>

    </NavigationContainer>

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

