import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native'
import { Container, Form, Item, Input ,Text ,Button,View} from 'native-base';
export default Login = ({navigation}) => {
    return (
      <Container >
        <View style={styles.wrapper}>
            <Text style={styles.header}>Login</Text>
          <Form style={styles.formWrapper}>
            <Item  style={{marginBottom:40}}>
              <Input floatingLabel placeholder="Phone Number" keyboardType="number-pad" />
            </Item>
            <Item>
              <Input floatingLabel placeholder="Password" textContentType="password" />
            </Item>
            <View contentContainerStyle={styles.wrap} style={styles.wrap}>
            <Text>Forget Password</Text>
            <Button style={{padding:20,height:35,backgroundColor:'#2A358F'}}>
                <Text>Login</Text>
            </Button>
            </View>
            <View style={{display:'flex',justifyContent:'flex-end',flexDirection:'row',marginTop:20}}>
                <Text>New Member? <Text style={{color:'blue'}}  onPress={() => navigation.navigate("Signup")}>Register</Text></Text>
            </View>
          </Form>
        </View>
        <Image source={require('../assets/login-asset/bottomIcon.png')} />
      </Container>
    );
  }
const styles = StyleSheet.create({
    wrapper :{
        marginLeft:20,
        marginRight:20,
        marginTop:50
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