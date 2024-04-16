import { Stack, router } from "expo-router"
import { Text, View, StyleSheet, SafeAreaView, Pressable} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureDetector , Gesture, Directions} from "react-native-gesture-handler";
import Animated, {FadeIn, FadeOut,SlideInRight, SlideOutLeft } from "react-native-reanimated"

const onboardingSteps= [{

        icon:'family-restroom',
        title:'Welcome to Easy Gas Family',
        description:"Nothing brings us more joy than to know that you have finally decided to be a part of the reliable engery family",
},{

    icon:'discount',
    title:'A place for SuperDeals',
    description:"The app will provide you with access to great gas deals and discounts available to only our customers.",
},{

    icon:'delivery-dining',
    title:'Get Fast Home Delivery',
    description:"Place your oder with us and relax. Get quick and hussle free deliveries right to your door step  ",
}
];

export default function OnboardingScreen(){
    const [screenIndex, setScreenIndex] = useState(0) ;

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length-1;
        if(isLastScreen){
            endOnboarding();
        }else{
            setScreenIndex(screenIndex + 1)
        }
        
    };
    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if(isFirstScreen){
            endOnboarding();
        }else{
            setScreenIndex(screenIndex - 1)
        }
        
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    };

    const swipes = Gesture.Simultaneous(Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack),
                                        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue)
);

    return(
        <SafeAreaView style={styles.page} > 
        <StatusBar style="light"/>

            <Stack.Screen options={{headerShown: false}}/>
            <GestureDetector gesture={swipes}>
            <Animated.View entering={FadeIn} exiting={FadeOut} key={screenIndex} style={styles.pageContent}>
            <View style={styles.stepIndicatorContainer}>
               {onboardingSteps.map((step, index) => (
               <View key={index} style={[styles.stepIndicator, {backgroundColor: index === screenIndex?"white": "grey"}]}/>))}
            </View>

                <MaterialIcons style={styles.image} name={data.icon  as "family-restroom" | "discount" | "delivery-dining"} size={200} color="#ffffff" />
            
                <View style={styles.footer}>
                <Animated.Text entering={SlideInRight} exiting={SlideOutLeft} style={styles.title}>{data.title}</Animated.Text>
                <Animated.Text entering={SlideInRight.delay(100)} style={styles.description}>{data.description}</Animated.Text>

                <View style={styles.buttonsRow}>
                    <Text onPress={endOnboarding} style={styles.buttonText1}>Skip</Text>

                    <Pressable onPress={onContinue} style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>
                </View >
                </View>
            </Animated.View>
            </GestureDetector>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
page:{
    justifyContent:"center",
    flex:1,
    backgroundColor:"#BE2983",
   
},
pageContent:{
    padding:20,
    flex:1,
},
image:{
    alignSelf:'center',
    margin:20,
    marginTop:80,
},

title:{
    color:"#ffffff",
    fontSize:50,
    fontWeight:'700',
    letterSpacing:1,
    marginVertical:20,
},
description:{
    color:"#ffffff",
    fontSize:20,
    lineHeight:28,
},
footer:{
    marginTop:"auto"
},
buttonsRow:{
    marginTop:20,
    flexDirection:"row",
    alignItems:'center',
    gap:20,
},
button:{
    backgroundColor:"#ffffff",
    padding:20,
    borderRadius:50,
    alignItems:'center',
    flex:1,
},
buttonText:{
    fontSize:16,
    fontWeight:'700',
},
buttonText1:{
    fontSize:16,
    fontWeight:'700',
    color:"white",
    padding:20,
},
    //steps
stepIndicatorContainer:{
    flexDirection:'row',
    gap:5,
},
stepIndicator:{
    flex:1,
    height:3,
    backgroundColor:"gray",
    borderRadius:10,
}

});