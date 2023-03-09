import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { AntDesign  } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_500Medium, 
  Montserrat_600SemiBold,
  Montserrat_700Bold
  } from "@expo-google-fonts/montserrat";

  const devWidth = Dimensions.get('window').width;
  const devHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
     
      slide: {
        flex: 1,
        paddingTop:80,
        marginHorizontal: 30,

      },
      img:{
        alignSelf: "center",
        borderTopRightRadius: 80,
        borderBottomLeftRadius: 80,
        height: devHeight*0.5,
        width: devWidth* 0.9
      },
       title: {
        fontFamily: "Monteserrat_700Bold",
        marginTop: 60,
        marginHorizontal: 10,
        fontSize: 32
       },
       text: {
        color: "#767676",
        fontFamily: "Monteserrat_400Regular",
        marginTop: 20,
        fontSize: 16,
        lineHeight: 25,
        marginLeft: 10
       },
       wrapper :{
        flex: 1,
        
       }


  })

  const App = () => {
    let [fontsLoaded] = useFonts({
      Montserrat_400Regular, 
      Montserrat_500Medium, 
      Montserrat_600SemiBold,
      Montserrat_700Bold
    });

    if(!fontsLoaded){
      return <AppLoading />
    } else {
     return (
        <Swiper buttonWrapperStyle={{
          backgroundColor: "transparent",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          left: 0,
          flex: 1,
          paddingHorizontal: 30,
          paddingVertical: 20,
          justifyContent: "flex-end",
          alignItems: "flex-end"
         }}
         
         showsButtons={true}
         paginationStyle={{
          marginRight: devWidth*0.7,
          marginBottom: devHeight+0.02,
         }}
         activeDotColor="#BA56AC"
         dotColor="#998FA2"
         nextButton={
          <View style ={{
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent:"center",
            width: 60,
            backgroundColor:"#BA56AC"
           }}>
          
          <AntDesign name="arrowright" size={22} color="#fff" />
          </View>
         }
         prevButton={
          <View style ={{
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent:"center",
            width: 60,
            backgroundColor:"#BA56AC",
            marginHorizontal: 20
           }}>
          
          <AntDesign name="arrowleft" size={22} color="#fff" />
          </View>
         }

           >
            <View style={styles.slide}>
              <Image source={require("./assets/skulls.jpg")} style={styles.img}/>
              <Text style={styles.title}>Tell Me What Do You Think</Text>
              <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorum similique magnam veniam dolores vel, expedita saepe aut quae temporibus laudantium modi, necessitatibus molestias mollitia</Text>

            </View>

            <View style={styles.slide}>
              <Image source={require("./assets/world.jpg")} style={styles.img}/>
              <Text style={styles.title}>Meet Up At London</Text>
              <Text style={styles.text}>
              When I was 5 years old, my mother always told me that happiness was the key to life.
              When Iwent to school, they asked me what I wanted to be when I grew up.
               </Text>

            </View>

            <View style={styles.slide}>
              <Image source={require("./assets/skulls.jpg")} style={styles.img}/>
              <Text style={styles.title}>Discover</Text>
              <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorum similique magnam veniam dolores vel, expedita saepe aut quae temporibus laudantium modi, necessitatibus molestias mollitia</Text>

            </View>

        </Swiper>
     )
    }
  }

  export default App;