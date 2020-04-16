import React from 'react';
import FadeInView from '../components/AnimatedFragment'
import ConnectShopButton from '../components/connectshop-btn'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';


const GetStarted= ({navigation}) => {

  return (
      <>
        <View style={styles.content}>
          <Text style={styles.mainHeading}>Connect Shop</Text>
          <FadeInView>
            <Text style={{textAlign:'center',marginLeft:20,marginRight:20,fontWeight:"300"}}>
            Online platform where user and retailers can connect at the time of crisis.
            </Text>
          </FadeInView>
            <ConnectShopButton title="Get Started" onPress={() => navigation.navigate("Login")} />
        </View>
        <Image source={require('../assets/splash-screen-asset/1x.png')} />
      </>
  );
};

const styles = StyleSheet.create({
  wrapper : {
    height:'100%',
    display:'flex',
    flexDirection:'column',
  },
  content:{
    flexGrow:2,
    justifyContent:'center',
    alignItems:'center'
  },
  mainHeading : {
    fontSize:36,
    marginBottom:10
  }
});

export default GetStarted;
