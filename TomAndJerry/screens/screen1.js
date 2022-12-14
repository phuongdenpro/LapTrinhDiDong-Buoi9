import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import icon from "../assets/download.jpg";

const Screen1 = (props) => {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  function onPress(evt) {
    console.log("====================================");
    var x = evt.nativeEvent.locationX;
    console.log("====================================");
    console.log(x);
    console.log("====================================");
    var y = evt.nativeEvent.locationY;
    console.log("====================================");
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });
  }
  function onMove(evt) {
    console.log("====================================");
    console.log(location);
    console.log("====================================");
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease() {
    console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          marginLeft: 20,
        }}
      >
        <Button title="Go Back" onPress={() => props.navigation.goBack()} />
        <Text style={{ color: "green", fontSize: 15, marginLeft: 30 }}>
          Touch where you need to go!
        </Text>
      </View>

      <Animated.Image
        source={icon}
        style={{ marginLeft: marginLeft, marginTop: marginTop }}
      ></Animated.Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Screen1;
