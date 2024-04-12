import React from "react";
import { Button, Text,View } from "react-native";
import { Link, Stack } from "expo-router";


export default function DayDetailsScreen(){
    return(
        <View>
            <Stack.Screen options={{title: "Day2: Onboarding"}}/>
            <Text> day detail screen </Text>

            <Link href="/day2/onboarding" asChild>
                <Button title="Go to onboarding"/>
            </Link>
            
        </View>
  
    )
}