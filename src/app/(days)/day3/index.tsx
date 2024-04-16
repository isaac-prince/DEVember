import React from "react";
import { Button, Text,View } from "react-native";
import { Link, Stack } from "expo-router";


export default function DayDetailsScreen(){
    return(
        <View>
            <Stack.Screen options={{title: "Day3:MarkDown"}}/>
            <Text> day detail screen </Text>

            <Link href="/day3/editor" asChild>
                <Button title="Go to editor"/>
            </Link>
            
        </View>
  
    )
}