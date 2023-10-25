import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function MisCursos() {

  return (
    
    <ScrollView style={styles.container}>
      {/* Aquí empieza el contenedor del curso */}

      <TouchableOpacity    >
        {/* <TouchableOpacity 
        onPress={() => navigation.navigate("IndexCurso")}
      > */}
        <View style={styles.containerCursos}>

          <View style={styles.CajaImagen}>
            <Image
              style={styles.TamanioImagen}
              source={require('../../assets/images/discapacidad.jpg')}
            />
          </View>

          <View style={styles.CajaInformacion}>
            <View style={styles.CajaTitulo}>
              <Text style={styles.TextoTitulo}>Inclusión educativa</Text>
            </View>

            <View style={styles.CajaDescripcion}>
              <Text style={styles.Descripcion}>Este curso aborda estrategias de enseñanza y la creación de un entorno educativo inclusivo.
              </Text>
            </View>

            <View style={styles.CajaIconos}>
              <Ionicons name="alarm-outline" style={styles.IconosCustomXD} ></Ionicons>
              <Text style={styles.ReaccionesTexto}> 10:20 Minutos</Text>
            </View>

            <View style={styles.CajaIconos}>
              <Ionicons name="heart-half-outline" style={styles.IconosCustomXD} ></Ionicons>
              {/* <Ionicons name="heart-outline" style={styles.IconosCustomXD} ></Ionicons> */}
              <Text style={styles.ReaccionesTexto}> 6</Text>
            </View>

          </View>
        </View>
      </TouchableOpacity>
      {/* Aquí termina el contenedor del curso */}

      {/* Aquí empieza el contenedor del curso */}
      <TouchableOpacity >
        <View style={styles.containerCursos}>

          <View style={styles.CajaImagen}>
            <Image
              style={styles.TamanioImagen}
              source={require('../../assets/images/niñodiscapacidad.jpg')}
            />
          </View>

          <View style={styles.CajaInformacion}>
            <View style={styles.CajaTitulo}>
              <Text style={styles.TextoTitulo}>Comunicación Inclusiva</Text>
            </View>

            <View style={styles.CajaDescripcion}>
              <Text style={styles.Descripcion}>Este curso se centra en promover la comunicación efectiva y la inclusión de personas con discapacidad.
              </Text>
            </View>

            <View style={styles.CajaIconos}>
              <Ionicons name="alarm-outline" style={styles.IconosCustomXD} ></Ionicons>
              <Text style={styles.ReaccionesTexto}> 10:20 Minutos</Text>
            </View>

            <View style={styles.CajaIconos}>
              <Ionicons name="heart-half-outline" style={styles.IconosCustomXD} ></Ionicons>
              {/* <Ionicons name="heart-outline" style={styles.IconosCustomXD} ></Ionicons> */}
              <Text style={styles.ReaccionesTexto}> 6</Text>
              </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* Aquí termina el contenedor del curso */}
      {/* Aquí empieza el contenedor del curso */}
      <TouchableOpacity >
        <View style={styles.containerCursos}>

          <View style={styles.CajaImagen}>
            <Image
              style={styles.TamanioImagen}
              source={require('../../assets/images/discapacidades.jpg')}
            />
          </View>

          <View style={styles.CajaInformacion}>
            <View style={styles.CajaTitulo}>
              <Text style={styles.TextoTitulo}>Desarrollo Socioemocional</Text>
            </View>

            <View style={styles.CajaDescripcion}>
              <Text style={styles.Descripcion}>Este curso se enfoca en promover la salud mental, la autonomía y las habilidades sociales.
              </Text>
            </View>

            <View style={styles.CajaIconos}>
              <Ionicons name="alarm-outline" style={styles.IconosCustomXD} ></Ionicons>
              <Text style={styles.ReaccionesTexto}> 10:20 Minutos</Text>
            </View>

            <View style={styles.CajaIconos}>
              <Ionicons name="heart-half-outline" style={styles.IconosCustomXD} ></Ionicons>
              {/* <Ionicons name="heart-outline" style={styles.IconosCustomXD} ></Ionicons> */}
              <Text style={styles.ReaccionesTexto}> 6</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
        {/* Aquí termina el contenedor del curso */}
        {/* Aquí empieza el contenedor del curso */}
       <TouchableOpacity >
        <View style={styles.containerCursos}>

          <View style={styles.CajaImagen}>
            <Image
              style={styles.TamanioImagen}
              source={require('../../assets/images/discapacidadauditiva.jpg')}
            />
          </View>

          <View style={styles.CajaInformacion}>
            <View style={styles.CajaTitulo}>
              <Text style={styles.TextoTitulo}>Lenguaje de Señas Básicas</Text>
            </View>

            <View style={styles.CajaDescripcion}>
              <Text style={styles.Descripcion}>Aprender la importancia del lenguaje de señas y la comunicación con personas con discapacidad auditiva.
              </Text>
            </View>

            <View style={styles.CajaIconos}>
              <Ionicons name="alarm-outline" style={styles.IconosCustomXD} ></Ionicons>
              <Text style={styles.ReaccionesTexto}> 10:20 Minutos</Text>
            </View>

            <View style={styles.CajaIconos}>
              <Ionicons name="heart-half-outline" style={styles.IconosCustomXD} ></Ionicons>
              {/* <Ionicons name="heart-outline" style={styles.IconosCustomXD} ></Ionicons> */}
              <Text style={styles.ReaccionesTexto}> 6</Text>
            </View>

          </View>
        </View>
      </TouchableOpacity>
      {/* Aquí termina el contenedor del curso */}
     {/* Aquí empieza el contenedor del curso */}
     <TouchableOpacity >
        <View style={styles.containerCursos}>

          <View style={styles.CajaImagen}>
            <Image
              style={styles.TamanioImagen}
              source={require('../../assets/images/logoEjemplo.jpg')}
            />
          </View>

          <View style={styles.CajaInformacion}>
            <View style={styles.CajaTitulo}>
              <Text style={styles.TextoTitulo}>Mis primeras telarañas xd</Text>
            </View>

            <View style={styles.CajaDescripcion}>
              <Text style={styles.Descripcion}>Como ser un Spidermamado en el Spider-Verso💪😎🕸.
              </Text>
            </View>

            <View style={styles.CajaIconos}>
              <Ionicons name="alarm-outline" style={styles.IconosCustomXD} ></Ionicons>
              <Text style={styles.ReaccionesTexto}> 10:20 Minutos</Text>
            </View>

            <View style={styles.CajaIconos}>
              <Ionicons name="heart-half-outline" style={styles.IconosCustomXD} ></Ionicons>
              {/* <Ionicons name="heart-outline" style={styles.IconosCustomXD} ></Ionicons> */}
              <Text style={styles.ReaccionesTexto}> 6</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* Aquí termina el contenedor del curso */}
    
    </ScrollView>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
  },
  containerCursos: {
    flexDirection: 'row',
    height: 150,
    marginTop:20,
    marginBottom: 20,
  },
  CajaImagen: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    width: '36%',
    marginLeft: 0,

  },
  CajaInformacion: {
    width: '63%',
    elevation: 0.9,
    shadowColor: '#52006A',
  },
  TamanioImagen: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,

  },

  CajaDescripcion: {
    width: '100%',
    height: '53%',

    paddingLeft: 5,

  },
  CajaIconos: {
    width: '100%',
    height: '16%',
    flexDirection: 'row',
  },
  CajaTitulo: {
    width: '100%',
    height: '17%',

    alignItems: 'center',
  },

  IconosCustomXD: {
    color: 'red',
    fontSize: 20,
    paddingLeft: 5
  },

  TextoTitulo: {
    fontFamily: 'Roboto',
    fontSize: 14.5,
    alignItems: 'center',
    fontWeight: 'bold',

  },
  Descripcion: {
    width: '100%',
    height: 16,
    color: 'gray',
    height: '100%'
  },
  ReaccionesTexto: {
    color: 'gray'
  }
});
