import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, useWindowDimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, { useState, useEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'; //Para crear pestañas en una misma interfaz
import { useRoute } from '@react-navigation/native'; // Importa useRoute
import axios from 'axios';
import Registro from '../Registro';
import Login from '../Login';
import { useNavigation } from '@react-navigation/core';

//----------------------------- APIS -----------------------------//
import { GET_DATOS_ID_CURSO, GET_DATOS_PROPIETARIO_CURSO, GET_IMAGEN_PORTADA_PROPIETARIO_CURSO, VISTA_RECURSO, IMG_PROPIETARIO_CURSO } from '../apis/Api';

const Stack = createStackNavigator();

// const TemarioRoute = () => (
const TemarioRoute = () => {

     const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        // <ScrollView style={{ flex: 1, backgroundColor: '#ff4081' }}>
        <ScrollView >

            <View style={styles.containerInferior}>

                <View style={styles.conNombreCurso}>

                    <View style={styles.conTemarioMaster}>
                        {/* <Text>Nombre del Curso XD</Text> */}
                        <View >
                            <Text style={styles.TituloCursoTemario}>Precio y temario</Text>
                        </View>
                        <View style={styles.contTitulo2}>
                            <ScrollView>
                                <Text style={styles.DescripcionTemario}></Text>
                            </ScrollView>
                        </View>
                        <View style={styles.contPrecio}>
                            <View style={styles.separacionDoble}>
                                <Text style={styles.IconosCustom2}>$20 Mx</Text>                                
                            </View>
                            <View style={styles.contPrecio}>
                                <Ionicons name="heart-half-outline" style={styles.IconosCustom2} ></Ionicons>
                                <Text style={styles.IconosCustom2}></Text>
                            </View>
                        </View>
                    </View>
                    {/* Parte del titulo, descripcion, Precio y cantidad de Reacciones */}

                    <View style={styles.contTemas}>
                        <TouchableOpacity onPress={toggleDropdown} style={styles.btnDesplegable}>
                            <Text>Temario 1</Text>
                            <Ionicons name="caret-down-outline"></Ionicons>
                        </TouchableOpacity>

                        {/* Para aparecer cosas al presionar un botón */}
                        {isDropdownVisible && (
                            <View style={styles.dropdownContent}>
                                {/* Aquí coloca el contenido que deseas mostrar */}
                                <View style={styles.contInfoOculto}>
                                    
                                        <Text style={styles.TextTemario}>Contenido desplegable Contenido desplegableContenido desplegableContenido desplegable Contenido desplegableContenidoContenido desplegableContenido</Text>
                                    
                                </View>
                                {/* <Image source={require('./tu_imagen.png')} /> Ejemplo de una imagen */}
                            </View>
                        )}
                        {/* Para aparecer cosas al presionar un botón */}
                    </View>
                    <View style={styles.contTemas}>
                        <TouchableOpacity onPress={toggleDropdown} style={styles.btnDesplegable}>
                            <Text>Temario 1</Text>
                            <Ionicons name="caret-down-outline"></Ionicons>
                        </TouchableOpacity>

                        {/* Para aparecer cosas al presionar un botón */}
                        {isDropdownVisible && (
                            <View style={styles.dropdownContent}>
                                {/* Aquí coloca el contenido que deseas mostrar */}
                                <View style={styles.contInfoOculto}>
                                    
                                        <Text style={styles.TextTemario}>Contenido desplegable Contenido desplegableContenido desplegableContenido desplegable Contenido desplegableContenidoContenido desplegableContenido</Text>
                                    
                                </View>
                                {/* <Image source={require('./tu_imagen.png')} /> Ejemplo de una imagen */}
                            </View>
                        )}
                        {/* Para aparecer cosas al presionar un botón */}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const ObjetivosRoute = () => (
    <ScrollView >
        <View style={styles.containerInferior}>
            {/* Por si se quiere añadir que se expanda la descripción al dar clic en esta área */}
            <TouchableOpacity>
                <View style={styles.contObjetivo}>
                    <View style={styles.cajaObjetivo}>
                        {/* Para permitir visualizar toda la descripción que se encuentra en cada objetivo */}                        
                            <Text style={styles.TextObjetivoTitulo}>Objetivo 1</Text>
                            <Text style={styles.TextObjetivoDescripcion}>bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla </Text>                        
                        {/* Para permitir visualizar toda la descripción que se encuentra en cada objetivo */}
                    </View>
                </View>
            </TouchableOpacity>
            {/* Por si se quiere añadir que se expanda la descripción al dar clic en esta área */}
            {/* Por si se quiere añadir que se expanda la descripción al dar clic en esta área */}
            <TouchableOpacity>
                <View style={styles.contObjetivo}>
                    <View style={styles.cajaObjetivo}>
                        {/* Para permitir visualizar toda la descripción que se encuentra en cada objetivo */}
                        
                            <Text style={styles.TextObjetivoTitulo}>Objetivo 1</Text>
                            <Text style={styles.TextObjetivoDescripcion}>bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla </Text>
                        
                        {/* Para permitir visualizar toda la descripción que se encuentra en cada objetivo */}
                    </View>
                </View>
            </TouchableOpacity>
            {/* Por si se quiere añadir que se expanda la descripción al dar clic en esta área */}
            {/* Por si se quiere añadir que se expanda la descripción al dar clic en esta área */}
            <TouchableOpacity>
                <View style={styles.contObjetivo}>
                    <View style={styles.cajaObjetivo}>
                        {/* Para permitir visualizar toda la descripción que se encuentra en cada objetivo */}
                        
                            <Text style={styles.TextObjetivoTitulo}>Objetivo 1</Text>
                            <Text style={styles.TextObjetivoDescripcion}>bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla </Text>
                        
                        {/* Para permitir visualizar toda la descripción que se encuentra en cada objetivo */}
                    </View>
                </View>
            </TouchableOpacity>
            {/* Por si se quiere añadir que se expanda la descripción al dar clic en esta área */}
            {/* Por si se quiere añadir que se expanda la descripción al dar clic en esta área */}
            <TouchableOpacity>
                <View style={styles.contObjetivo}>
                    <View style={styles.cajaObjetivo}>
                        {/* Para permitir visualizar toda la descripción que se encuentra en cada objetivo */}
                        
                            <Text style={styles.TextObjetivoTitulo}>Objetivo 1</Text>
                            <Text style={styles.TextObjetivoDescripcion}>bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla </Text>
                        
                        {/* Para permitir visualizar toda la descripción que se encuentra en cada objetivo */}
                    </View>
                </View>
            </TouchableOpacity>
            {/* Por si se quiere añadir que se expanda la descripción al dar clic en esta área */}
            {/* Por si se quiere añadir que se expanda la descripción al dar clic en esta área */}
            <TouchableOpacity>
                <View style={styles.contObjetivo}>
                    <View style={styles.cajaObjetivo}>
                        {/* Para permitir visualizar toda la descripción que se encuentra en cada objetivo */}
                        
                            <Text style={styles.TextObjetivoTitulo}>Objetivo 1</Text>
                            <Text style={styles.TextObjetivoDescripcion}>bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                bla bla bla </Text>
                        
                        {/* Para permitir visualizar toda la descripción que se encuentra en cada objetivo */}
                    </View>
                </View>
            </TouchableOpacity>
            {/* Por si se quiere añadir que se expanda la descripción al dar clic en esta área */}
        </View>

    </ScrollView>
);

export const ComprarRoute = () => {
    const navigation = useNavigation(); // Usar useNavigation para obtener la navegación
    const route_Login = () => {
        // navigation.navigate('Registro');
        navigation.navigate('Login');
    };

    return (
        <View style={styles.containerInferior}>
            <View style={styles.conPestaniaComprar}>
                <Text style={styles.TituloPestaniaComprar}>Para obtener este curso primero debes iniciar sesión</Text>
            </View>
            <View style={styles.contBtnIniciarSesion}>
                <TouchableOpacity onPress={route_Login} style={styles.bntIniciarSesion}>
                    <Text style={styles.bntTexto}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const renderScene = SceneMap({
    temario: TemarioRoute,
    objetivos: ObjetivosRoute,
    comprar: ComprarRoute,
});


const renderTabBar = props => (
    <TabBar
        {...props}
        // indicatorStyle={{ backgroundColor: 'white' }} //linea que marca en donde se ubica el usuario
        indicatorStyle={{ backgroundColor: '#9B00FF' }}
        //   style={{ backgroundColor: 'pink' }}
        // style={{ backgroundColor: 'gray' }} //para definir el color de fondo de las pestañas "Tab View"
        style={{ backgroundColor: '#F8F8F8' }}

        //   Para modificar el estilo de los "Labels"
        renderLabel={({ color, route }) => (
            // <Text style={{ color, margin: 8 }}>
            <Text style={{ color: '#9B00FF', fontWeight: 'bold' }}>
                {/* Para mostrar el titulo, en caso de no querer mostrarlo simplemente quitar la siguiente línea*/}
                {route.title}
            </Text>
        )}
    />
);


export default function IndexCurso({ navigation }) {   
    
    const route = useRoute(); // Obtiene la ruta actual
    const { courseId } = route.params; // Obtiene el courseId de la ruta    
    const [cursoDetalles, setCursoDetalle] = useState([]);
   
   
    useEffect(() => {
    // Realiza una solicitud GET a la API para obtener detalles adicionales del curso
        axios.get(`${GET_DATOS_ID_CURSO}${courseId}`)
        .then((response) => {
            setCursoDetalle(response.data);            
        })
        .catch((error) => {
            console.error('Error al obtener detalles del curso', error);
        });
    }, [courseId]);

    const [usuarioDetalles, setusuarioDetalles] = useState([]);
    const [imgusuarioDetalles, setimgusuarioDetalles] = useState([]);
    
    useEffect(() => {
      // Realiza una solicitud GET a la API para obtener detalles adicionales del curso
      axios.get(`${GET_DATOS_PROPIETARIO_CURSO}${courseId}`)
        .then((response) => {
          setusuarioDetalles(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener detalles del curso', error);
        });
    }, [courseId]);
    
    // Este efecto se activará cada vez que usuarioDetalles cambie
    useEffect(() => {
      if (usuarioDetalles.id_Usuario) {        
        axios.get(`${GET_IMAGEN_PORTADA_PROPIETARIO_CURSO}${usuarioDetalles.id_Usuario}`)
          .then((response) => {
            setimgusuarioDetalles(response.data);
            console.log(response.data)
          })
          .catch((error) => {
            console.error('Error al obtener detalles del curso', error);
          });
      }
    }, [usuarioDetalles]);
    
    

    if (!cursoDetalles) {
        return <Text>Cargando detalles del curso...</Text>;
    }   
    if (!usuarioDetalles) {
        return <Text>Cargando detalles del propietario...</Text>;
    }



    
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'temario', title: 'Temario' },
        { key: 'objetivos', title: 'Objetivos' },
        { key: 'comprar', title: 'Comprar' },
    ]);


    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity>
                <ImageBackground style={styles.containerImagen}
                    source={{ uri: `${VISTA_RECURSO}${cursoDetalles.vistaprevia}`}}>
                    {/*<Image
                        style={styles.TamanioImagen}
                        source={require('../../../assets/images/Spiderman.png')} />*/}
                </ImageBackground>
            </TouchableOpacity>

            <View style={styles.containerInferior}>

                <View style={styles.conNombreCurso}>

                    <View style={styles.InformacionCurso}>

                        <View style={styles.contLogo}>
                            <Image
                                source={{ uri: `${IMG_PROPIETARIO_CURSO}${imgusuarioDetalles.perfil_user}`}}
                                style={styles.LogoImagen}
                            />
                        </View>
                        <View style={styles.contTitulo}>
                            {/* <Image
                    source={require('../../../assets/images/logoEjemplo.jpg')}
                    style={styles.LogoImagen}
                  /> */}
                            <View style={styles.contTitulo2}>
                                <Text style={styles.TextTitulo}>{cursoDetalles.nombre} </Text>
                                <ScrollView>
                                    <Text style={styles.TextSubTitulo}>De: {usuarioDetalles.nombrePropietario}</Text>
                                </ScrollView>
                            </View>
                            <TouchableOpacity style={styles.TextTitulo3}>
                                <Ionicons style={styles.IconosCustomXD} name="ellipsis-vertical-outline"></Ionicons>
                            </TouchableOpacity>

                        </View>
                    </View>
                    {/* Parte abajo de las pestañas de navegación */}
                    <View style={styles.conPestanias}>

                        {/* <TabView /> */}
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            // initialLayout={{ width: layout.width }}
                            initialLayout={{ width: layout.width }}
                            renderTabBar={renderTabBar}
                        />
                    </View>
                    {/* Parte abajo de las pestañas de navegación */}
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerImagen: {
        // backgroundColor: 'red',
        height: 300,
        width: '100%',
        resizeMode: 'cover'
    },
    TamanioImagen: {
        // backgroundColor: 'red',
        height: '100%',
        width: '100%'
    },
    contLogo: {
        width: '25%',
        height: 'auto'
    },
    contTitulo: {
        // width: '75%',
        width: '80%',
        height: '100%',
        // backgroundColor: 'violet',
        // flexDirection:'' esto quiere decir que antes no habia puesto "flexDirection"
        flexDirection: 'row',
        alignItems: 'center'
    },
    contTitulo2: {
        width: '85%',
    },
    TextTitulo: {
        width: '100%',
        paddingLeft: 5,
        padding:3,        
        height: '60%',
        fontSize: 13,        
        fontWeight: 'bold'
    },
    TextSubTitulo: {
        width: '100%',
        paddingLeft: 5,
        // backgroundColor: 'red',
        color: 'gray'
    },
    TextTitulo3: {
        // Esto esta antes de poner el boton xd
        // width: '15%', //puse 15% porque es lo que le falta al 85% para llegar al 100%... Mira el Estilo "contTitulo2"... :D
        width: '125%',
        height: 'auto',
        top: 10
    },
    IconosCustomXD: {
        width: '100%',
        height: '100%',
        fontSize: 30,
        right: 7
    },
    LogoImagen: {
        width: '100%',
        height: '100%'
    },
    containerInferior: {
        flex: 1,        
        height: 'auto',
        top:10
    },
    conNombreCurso: {
        // backgroundColor: 'green',
        height: '100%',
        width: '100%',
        alignContent: 'center',
        // Centrar los objetos horizontalmente
        alignItems: 'center'
    },
    // 
    InformacionCurso: {
        backgroundColor: 'white',
        // alignContent:'center',
        width: '90%',
        height: 80,
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 2,
        bottom: 25,
    },
    conPestanias: {
        bottom: 15,
        // backgroundColor: 'violet',
        width: '100%',
        height: 300,
        flexDirection: 'row',
        // justifyContent:'center',
        justifyContent: 'space-around'
    },
    contTouchPestanias: {
        width: '100%',
        // backgroundColor: 'green',
        alignContent: 'center',
        alignItems: 'center'
    },
    conApartadoPestania: {
        width: 115,
        height: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },

    // 
    TituloCursoTemario: {
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 5,
        marginTop: 15,
        height: 'auto'
    },
    DescripcionTemario: {
        // fontSize:15
        // height: 'auto'
    },
    conTemarioMaster: {
        // backgroundColor: 'orange',
        width: '100%',
        marginLeft: 50
    },
    contPrecio: {
        marginTop: 10,
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 30
    },
    IconosCustom2: {
        fontSize: 20
    },
    separacionDoble: {
        width: 100
    },
    contTemas: {
        marginTop: 15,
        // backgroundColor: 'green',
        width: '100%',
        height: 'auto',
        marginBottom: 20
    },
    btnDesplegable: {
        flexDirection: 'row',
        // backgroundColor: 'gray',
        width: '80%',
        borderRadius: 5,
        left: 40,
        height: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: 'violet',
    },

    dropdownContent: {
        width: '100%',
        // backgroundColor: 'red',
        alignItems: 'center',
    },

    contInfoOculto: {
        width: '85%',        
        alignItems: 'center',        
        left: 10,        
        borderBottomColor: 'gray',
        paddingLeft: 10,
        paddingRight: 5
    },
    TextTemario: {
        
    },
    conPagos: {
        backgroundColor: 'orange'
    },

    contObjetivo: {
        width: '95%',
        height: 'auto',
        // backgroundColor: 'violet'
        marginBottom: 20
    },

    cajaObjetivo: {
        width: '85%',
        height: 80,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 5
    },
    TextObjetivoTitulo: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
        marginTop: 5
    },
    TextObjetivoDescripcion: {
        marginBottom: 5,
    },

    TituloPestaniaComprar: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'italic',
    },

    conPestaniaComprar: {
        // backgroundColor:'red',
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignContent: 'center',

    },
    contBtnIniciarSesion: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    bntIniciarSesion: {
        width: 150,
        backgroundColor: '#9B00FF',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        color: 'white'
    },
    bntTexto: {
        color: 'white',
        fontWeight: 'bold'
    }
});
