import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el icono que desees usar
import Ionicons from 'react-native-vector-icons/Ionicons'
import { globalStyles } from '../styles/styles';


export default function CustomDrawer(props) {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <ImageBackground source={{ uri: 'https://educacionespecialmx.site/imgAppWeb/istockphoto-1130522927-612x612.jpg'}} style={{padding:40, paddingLeft:20,paddingRight:20}}>
                <Image 
                source={{ uri: 'https://educacionespecialmx.site/imgAppWeb/perfil.jpg'}}                
                style={globalStyles.imageNavigator}
                />
                <Text style={globalStyles.userimageNavigator}>
                    Irene Isabelle Cruz
                </Text>            
            </ImageBackground>
            <View style={globalStyles.optionsNavigator}>
                <DrawerItemList {...props}/>            
            </View>            
        </DrawerContentScrollView>
        <View style={globalStyles.optionsNavigatorTWo}>
            <TouchableOpacity style={globalStyles.TouchableOpacityoptionsNavigatorTWo}>   
            <Text>Cerrar sesion</Text>
                <Ionicons name="log-out-outline" size={24}></Ionicons>                
            </TouchableOpacity>        
        </View>
    </View>
  )
}