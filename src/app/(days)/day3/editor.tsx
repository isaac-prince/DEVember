import { Stack } from "expo-router";
import React, { useState } from "react";
import { StyleSheet ,Text, ScrollView, View, TextInput, Pressable} from "react-native"; 
import MarkdownDisplay from "../../../components/day3/MarkdownDisplay";


const template  = `# Markdown editor

You can start editing`

export default function EditorScreen(){
    const [content, setcontent] = useState(template);
    const [tab, setTab] = useState('edit');

    return(
        <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
        <Stack.Screen options={{title:"Editor Page"}}/>
        <View>
            <View style={styles.tabsContainer}>
                <Pressable onPress={()=> setTab("edit")} style={[styles.tab, {backgroundColor: tab==='edit' ? "lightgray" : "whitesmoke"}]}>
                <Text style={styles.tabText}>Edit</Text>
                </Pressable >
                <Pressable onPress={()=> setTab("preview")} style={[styles.tab, {backgroundColor: tab==='preview' ? "lightgray" : "whitesmoke"}]}>
                <Text style={styles.tabText}>Preview</Text>
                </Pressable>
             </View>
        {tab === 'edit' ? (<TextInput value={content}
        onChangeText={setcontent}
         multiline 
         numberOfLines={50}
         style={styles.input}/>):(
            <MarkdownDisplay>{content}</MarkdownDisplay>
         )}
        </View>
        </ScrollView>
    )      
};

const styles = StyleSheet.create({

container:{
    backgroundColor:"#fff",
    flex:1,
    padding:10,
    paddingBottom:30,
},
input:{
backgroundColor:'whitesmoke',
flex:1,
padding:20,
paddingTop:20,
borderRadius:10,
fontSize:14,
},
tabsContainer:{
flexDirection:"row",
gap:10,
padding:5,
paddingHorizontal:0,

},
tab:{
   flex:1,
   padding:10,
   borderColor: 'gray' ,
   borderWidth: 1,
   borderRadius:10,
   backgroundColor:"whitesmoke",
   alignItems:"center",
},
tabText:{
    fontWeight:"bold",

}
});