import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import mouse1 from "./assets/download.jpg";
import mouse2 from "./assets/Hinh-anh-Jerry-buon-450x600.jpg";
import mouse3 from "./assets/Anh-Jerry-le-luoi.jpg";

export default function App() {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: Math.floor(Math.random() * 100),
    marginTop: Math.floor(Math.random() * 100),
  });
  const [location2, setLocation2] = useState({
    x: null,
    y: null,
    marginLeft: Math.floor(Math.random() * 100),
    marginTop: Math.floor(Math.random() * 100),
  });
  const [location3, setLocation3] = useState({
    x: null,
    y: null,
    marginLeft: Math.floor(Math.random() * 100),
    marginTop: Math.floor(Math.random() * 100),
  });

  function onPress(evt) {
    console.log("====================================");
    var x = Math.floor(Math.random() * 200);
    console.log("====================================");
    console.log(x);
    console.log("====================================");
    var y = Math.floor(Math.random() * 200);
    console.log("====================================");
    console.log(y);
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });
    console.log("==================2==================");
    var x2 = Math.floor(Math.random() * 200);
    console.log("====================================");
    console.log(x2);
    console.log("====================================");
    var y2 = Math.floor(Math.random() * 200);
    console.log("====================================");
    console.log(y2);
    setLocation2({
      x: x2,
      y: y2,
      marginLeft: x2,
      marginTop: y2,
    });
    console.log("==================3==================");
    var x3 = Math.floor(Math.random() * 200);
    console.log("====================================");
    console.log(x3);
    console.log("====================================");
    var y3 = Math.floor(Math.random() * 200);
    console.log("====================================");
    console.log(y3);
    setLocation2({
      x: x3,
      y: y3,
      marginLeft: x3,
      marginTop: y3,
    });
  }
  function onMove(evt) {
    console.log("====================================");
    console.log(location);
    console.log("====================================");
    console.log(location2);
    console.log("====================================");
    console.log(location3);
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
      <Text style={{ color: "green", fontSize: 15 }}>
        Touch everywhere!
      </Text>

      <Animated.Image
        source={mouse1}
        style={{
          marginLeft: marginLeft,
          marginTop: marginTop,
          width: 200,
          height: 200,
        }}
      ></Animated.Image>
      <View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
        style={styles.container}
      >
        <Animated.Image
          source={mouse2}
          style={{
            marginLeft: location2.marginLeft,
            marginTop: location2.marginTop,
            width: 150,
            height: 200,
          }}
        ></Animated.Image>
      </View>
      <View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
        style={styles.container}
      >
        <Animated.Image
          source={mouse3}
          style={{
            marginLeft: location3.marginLeft,
            marginTop: location3.marginTop,
            width: 150,
            height: 150,
          }}
        ></Animated.Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
