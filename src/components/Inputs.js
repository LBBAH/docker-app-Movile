import React,{Component}from "react";
import {View,StyleSheet, TextInput} from 'react-native';
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


class Inputs extends Component{
    state={isFocused:false};
    onFocusChange =() =>{
        this.setState({isFocused:true})
    }

    render(){
        return(
            <View style={[styles.container,{borderColor:this.state.isFocused ?
                '#0779ef': '#eee'}]}>
                <Icon
            name={this.props.icon}
            size={20}
            color={this.state.isFocused ? '#000000' : 'grey'}
          />
            
                <TextInput
                    placeholder={this.props.name}
                    onFocus={this.onFocusChange}
                    style={[styles.inputText, { borderBottomColor: this.stateisFocused ? '#0779ef' : 'grey' }]}
                    inputStyle={styles.inputText}
                    secureTextEntry={this.props.pass}
                   
                />
                
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 50,
        borderRadius:10,
        marginVertical:10,
        borderWidth: 3.5,
        marginLeft:3,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    inputText:{
        color: '#000000',
        marginLeft:10,
        borderRadius:20,
        textAlign:'center',
        fontSize:16
    },
    icon:{
        marginRight: 10,
    }


});

export default Input;