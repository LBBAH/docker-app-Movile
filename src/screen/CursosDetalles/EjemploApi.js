import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';

// const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const API_URL = 'http://localhost:8000/api/ListarProductos';

const EjemploApi = () => {
  // const [data, setData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const result = await res.json();
        setResponse(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData(); // Llamar a la función de obtención de datos una vez al cargar el componente
  }, []); // Asegúrate de pasar un arreglo vacío como segundo argumento para que useEffect se ejecute solo una vez

  const renderProductItem = ({ item }) => (
    <View>
      <Text>ID:{item.id}</Text>
      <Text>Nombre: {item.nombre_p}</Text>
      <Text>PRecio: {item.precio}</Text>
    </View>
  );

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      <Text>{error}</Text>
    }
    console.log(response)
    // return <Text>Llamando API</Text>
    // return <Text>Lista de producto: {response[0].id}</Text>
    // return (
    //   <Text>
    //     Lista de producto: {response[0].nombre_p}
    //     Lista de producto: {response[0].precio}
    //     {/* Lista de producto: {response} */}
    //   </Text>
    // )

    return (
      <FlatList
        data={response}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    )
  }


  return (
    <View style={styles.container}>
      {getContent()}
      <Text>Holaaaaaaa</Text>
      {/* <StatusBar /> */}
    </View>
  )


};


const ejemplo2 = () => {
  const [info, setInfo] = useState(undefined);

  const getApiInfo = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    // const url = 'http://localhost:8000/api/ListarProductos';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    console.log(result)
  }

  useEffect(() => {
    getApiInfo();
  }, [])

  return (
    <View>
      {/* <Text>holaaa</Text> */}
      {info ?
        <View>
          <Text>{info.id}</Text>
        </View>
        : null}
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EjemploApi;
// export default ejemplo2;
