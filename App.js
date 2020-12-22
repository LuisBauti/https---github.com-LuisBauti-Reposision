import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get("window")

// importar componentes
import Food from './src/screens/food'
import Cart from './src/screens/Cart'
import Address from './src/screens/Address'
import Profile from './src/screens/Profile'

// importar AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';
// importar iconos
import Icon from 'react-native-vector-icons/Ionicons';

export default class Index extends Component {

  constructor(props) {
     super(props);
     this.state = {
       module:1,
     };
  }

  render() {
    return (
      <View style={{flex:1}}>
         {
          this.state.module==1? <Food />
          :this.state.module==2? <Cart />
          :this.state.module==3? <Address />
          :<Profile />
         }
         <View style={styles.bottomTab}>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:1})}>
             <Icon name="md-restaurant" size={30} color={this.state.module==1?"#900":"gray"} />
             <Text>Food</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.itemTab} onPress={()=>this.setState({module:2})}>
             <Icon name="md-basket" size={30} color={this.state.module==2?"#900":"gray"} />
             <Text>Cart</Text>
           </TouchableOpacity>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomTab:{
    height:60,
    width:width,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
  },
  itemTab:{
    width:width/4,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  }
})
