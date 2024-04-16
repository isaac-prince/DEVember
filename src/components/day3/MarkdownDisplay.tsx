import { Stack } from "expo-router";
import React, { PropsWithChildren } from "react";
import { StyleSheet , ScrollView} from "react-native"; 
import Markdown from "react-native-markdown-display";



export default function MarkdownDisplay({children}: PropsWithChildren){
    return(
        <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
        <Stack.Screen options={{title:"Editor Items"}}/>
        <Markdown style={markdownStyles} >
            {children}
        </Markdown>
        </ScrollView>
    )      
};

const markdownStyles = StyleSheet.create({
    heading1:{
        fontSize:30,
        fontWeight:"900",
    },
    heading2:{
        fontWeight:"700",
        marginTop:10,
    },
    body:{
        fontSize:18,
        lineHeight:30,
    }
});

const styles = StyleSheet.create({

container:{
    backgroundColor:"#fff",
    flex:1,
    padding:10,
    paddingBottom:30,
}
});