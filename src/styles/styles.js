import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

    // -------------------------- Estilos De barra de navegacion ----------------------------//
    imageNavigator: {
        height:80, 
        width:80, 
        borderRadius:40, 
        marginBottom:10    
    },
    userimageNavigator:{
        color:'#ffff', 
        fontSize:20, 
        fontFamily:'Robot-Medium'
    },
    optionsNavigator: {
        flex:1,
        paddingTop:12
    },

    optionsNavigatorTWo: {
        padding:20, 
        borderTopWidth:1, 
        borderTopColor:'#ccc'
    },
    TouchableOpacityoptionsNavigatorTWo:{
        flexDirection:'row', 
        alignItems:'center'
    },


    //------------------ Estilo Global de iconos -----------------------//    
    //------------------ Cursos vista previa -----------------------//
     container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
  },
  containerCursos: {
    flexDirection: 'row',
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  CajaImagen: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    width: '30%',
    marginLeft: 10,

  },
  CajaInformacion: {
    width: '62%',
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
    height: '40%',

    paddingLeft: 5,

  },
  CajaIconos: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
  },
  CajaTitulo: {
    width: '100%',
    height: '20%',
    margin:10
  },

  IconosCustomXD: {
    color: 'red',
    fontSize: 20,
    paddingLeft: 5
  },

  TextoTitulo: {
    fontFamily: 'Roboto',
    fontSize: 15,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  Descripcion: {
    width: '100%',
    height: 20,
    color: 'gray',
    height: '100%',
    fontSize: 14,
  },

  ReaccionesTexto: {
    color: 'gray'
  }

});