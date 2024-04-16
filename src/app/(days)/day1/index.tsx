import { AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import React from "react";
import { Text,StyleSheet } from "react-native";


export default  function DayDetailsScreen(){
    return(
        <Text style={styles.text}>
                day detail screen
        </Text>
    )
}

const styles= StyleSheet.create({
    text:{
         fontSize:100,
        fontFamily: 'AmaticSC_700Bold',
        }

}
   
);