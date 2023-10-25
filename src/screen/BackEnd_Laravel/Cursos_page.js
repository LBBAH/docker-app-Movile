import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { globalStyles } from '../../styles/styles';
import IndexCurso from '../CursosDetalles/IndexCurso';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { GET_RECURSOS_URL, VISTA_RECURSO } from '../apis/Api';

const Cursos_page = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigation = useNavigation(); // Obtiene la navegación


  const fetchData = async (page) => {
    try {
      const response = await axios.get(`${GET_RECURSOS_URL}/?page=${page}&per_page=20`);
      setData(response.data.data); // Actualiza los datos en el estado
    } catch (error) {
      console.error('Error al obtener datos paginados', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    // Puedes verificar si hay más páginas disponibles antes de aumentar currentPage
    setCurrentPage(currentPage + 1);
  };

  const handlePress = () => {
    // navigation.navigate('Registro')
    navigation.navigate("IndexCurso")
    // navigation.navigate('IndexCurso', {screen:"IndexCurso"})
  };
 

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          
          <TouchableOpacity onPress={() => navigation.navigate('IndexCurso', { courseId: item.id })}>
            <View style={globalStyles.containerCursos}>

              <View style={globalStyles.CajaImagen}>
                <Image
                  style={globalStyles.TamanioImagen}
                  source={{ uri: `${VISTA_RECURSO}${item.vistaprevia}` }}                  
                />
              </View>

              <View style={globalStyles.CajaInformacion}>
                <View style={globalStyles.CajaTitulo}>
                  <Text style={globalStyles.TextoTitulo}>{item.name}</Text>
                </View>

                <View style={globalStyles.CajaDescripcion}>
                  <Text style={globalStyles.Descripcion}>{item.Descripcion}
                  </Text>
                </View>

                <View style={globalStyles.CajaIconos}>
                  <Ionicons name="heart-half-outline" style={globalStyles.IconosCustomXD} ></Ionicons>
                  {/* <Ionicons name="heart-outline" style={globalStyles.IconosCustomXD} ></Ionicons> */}
                  <Text style={globalStyles.ReaccionesTexto}> 6</Text>
                </View>

              </View>
            </View>
          </TouchableOpacity>        
        )}
      />
      <Button title="Anterior" onPress={handlePreviousPage} />
      <Button title="Siguiente" onPress={handleNextPage} />
    </View>    
  );
};


export default Cursos_page;