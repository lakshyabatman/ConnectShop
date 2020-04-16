import React from 'react'
import {
    Button,
    View,
    StyleSheet
} from 'react-native'


export default ConnectShopButton = (props) => {
    return (
        <View style={styles.button}>
            <Button
                title={props.title}
                onPress= {props.onPress}
            />
        </View>
        
        
    )
}
const styles = StyleSheet.create({
    button : {
        marginTop:30,
        padding:5,
        color:'white',
        width: 200,
        backgroundColor:'#2A358F',
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowRadius:8,
        shadowOffset:{
          width:0,
          height:4
        },
        borderRadius: 10
      }
})