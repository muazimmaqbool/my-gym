import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Pressable,
  ImageBackground,
  Animated,
  Linking,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { styles } from "./StyleHomeScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import homeBg from "../../../assets/images/homeBG3.jpg";

const HomeScreen = ({ navigation }) => {
  /*
  ->main point of useRef is to persist a value across renders without causing a re-render 
  when the value changes. 
  In this case, it is used to create an animated value for each Pressable

  ->new Animated.Value(200):creates a new animated value that represents the starting position below 200 vertically
  */
  const pressableAnimations = [
    useRef(new Animated.Value(200)).current,
    useRef(new Animated.Value(200)).current,
    useRef(new Animated.Value(200)).current,
    useRef(new Animated.Value(200)).current,
    useRef(new Animated.Value(200)).current,
    useRef(new Animated.Value(200)).current,
  ];

  useEffect(() => {
    // Start the animations sequentially
    pressableAnimations.forEach((anim, index) => {
      //creates a spring-based animation that will move the Pressable from its initial position(200) to its final position(0)
      Animated.spring(anim, {
        toValue: 0, //final position
        useNativeDriver: true, //improves performance by running the animation on the native UI thread rather than the JavaScript thread
        delay: index * 100, // Delay each animation slightly to each pressable comp. so they don't animate together
        //delay is calculated based on the index, so the first Pressable has no delay, the second has a delay of 100ms, the third 200ms, and so on
      }).start();
    });
  }, [pressableAnimations]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground
        source={homeBg}
        resizeMode="cover"
        style={styles.bgImage}
      > */}
      <View style={styles.topBar}>
        <Text style={styles.gymName}>Hi Life Fitness</Text>
        <Text style={styles.address}>Bilal-Abad Sopore</Text>
      </View>

      <View style={styles.mainView}>
        <AnimatedPressable
          animation={pressableAnimations[0]}
          icon={<MaterialIcons name="dashboard" size={24} color="#48BD69" />}
          text="Dashboard Overview"
          onPress={() => navigation.navigate("dashboard")}
        />

        <AnimatedPressable
          animation={pressableAnimations[1]}
          icon={<Ionicons name="person-add-sharp" size={24} color="#257CFF" />}
          text="New Admission"
          onPress={() => navigation.navigate("addMember")}
        />

        <AnimatedPressable
          animation={pressableAnimations[2]}
          icon={<Ionicons name="people" size={24} color="#48BD69" />}
          text="All Members"
          onPress={() => navigation.navigate("allMembers")}
        />

        <AnimatedPressable
          animation={pressableAnimations[3]}
          icon={
            <MaterialCommunityIcons
              name="bell-alert"
              size={24}
              //use color="purple" when Notifications/Alerys are available
              color="#808D9E"
            />
          }
          text="Notifications/Alerts"
          onPress={() => navigation.navigate("notifications")}
        />

        <AnimatedPressable
          animation={pressableAnimations[4]}
          icon={<Ionicons name="settings" size={24} color="#172B85" />}
          text="Settings"
          onPress={() => navigation.navigate("settings")}
        />

        <AnimatedPressable
          animation={pressableAnimations[5]}
          icon={<Entypo name="help-with-circle" size={24} color="#00A8FF" />}
          text="Help/Support"
          onPress={() => Linking.openURL("mailto:mail@muaizm.com")}
        />
      </View>
      {/* </ImageBackground> */}
      <View style={styles.developerInfo}>
        <Text style={styles.devText}>Developed By</Text>
        <Pressable onPress={() => Linking.openURL("https://muaizm.com/")}>
          <Text style={styles.devName}>Muazim Maqbool</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const AnimatedPressable = ({ animation, icon, text, onPress }) => {
  return (
    <Animated.View style={{ transform: [{ translateY: animation }] }}>
      <Pressable style={styles.fieldContainer} onPress={onPress}>
        {icon}
        <Text
          style={[
            styles.fieldText,
            { color: text === "Notifications/Alerts" && "#808D9E" },
          ]}
        >
          {text} {text === "Notifications/Alerts" && "(coming soon)"}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default HomeScreen;
