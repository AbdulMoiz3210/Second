import React, {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';


class Header7 extends Component{
    render() {
     return (
         <View style={styles.container}> 
        <Text style = {styles.name}> ListView </Text>
        </View> 
      );           
    } 
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
       
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    
  }
});
export default Header7;