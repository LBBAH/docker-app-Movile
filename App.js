import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main, { StackScreen } from './src/screen/Main';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

import Cursos from './src/screen/Cursos';
import IndexCurso from './src/screen/CursosDetalles/IndexCurso';
// const RutasDeCursos = () => {
//   return (
//     <Stack.Navigator initialRouteName="Main" >
//       <Stack.Screen name="Cursos" component={Cursos} />
//       <Stack.Screen name="IndexCurso" component={IndexCurso} />
//     </Stack.Navigator>
//   );
// }
import * as Sentry from 'sentry-expo';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://8c1fa986ab724c3e62e168d10493dbec@o4505916480618496.ingest.sentry.io/4506103717756928',
});

Sentry.init({
  dsn: "https://8c1fa986ab724c3e62e168d10493dbec@o4505916480618496.ingest.sentry.io/4506103717756928",
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});


export default function App() {
  
  return (
    <Main />
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
