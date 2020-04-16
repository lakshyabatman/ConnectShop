import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native'
import { Container, Form, Item, Input ,Text ,Button,View} from 'native-base';
export default Signup = ({navigation}) => {
    return (
      <Container >
        <View style={styles.wrapper}>
            <Text style={styles.header}>Signup</Text>
          <Form style={styles.formWrapper}>
            <Item  style={{marginBottom:40}}>
              <Input floatingLabel placeholder="Phone Number"   keyboardType="number-pad"/>
            </Item>
            <Item style={{marginBottom:40}}>
              <Input floatingLabel placeholder="Password" secureTextEntry={true} textContentType="password"/>
            </Item>
            <Item>
              <Input floatingLabel placeholder="Retype Password" secureTextEntry={true} textContentType="password" />
            </Item>
            <View contentContainerStyle={styles.wrap} style={styles.wrap}>
            <Text>Forget Password</Text>
            <Button style={{padding:20,height:35,backgroundColor:'#2A358F'}}>
                <Text>Signup</Text>
            </Button>
            </View>
            <View style={{display:'flex',justifyContent:'flex-end',flexDirection:'row',marginTop:20}}>
                <Text>Already a Member? <Text style={{color:'blue'}} onPress={() => navigation.navigate("Login")}>Login</Text></Text>
            </View>
          </Form>
        </View>
        <Image source={require('../assets/signup-asset/bottomIcon_1x.png')} style={{position:'absolute',bottom:0}}/>
      </Container>
    );
  }
const styles = StyleSheet.create({
    wrapper :{
        marginLeft:20,
        marginRight:20,
        marginTop:50,
    },
    formWrapper : {
        marginTop:20
    },
    header : {
        fontSize:36
    },
    wrap : {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        justifyContent:'space-between'
    }
})