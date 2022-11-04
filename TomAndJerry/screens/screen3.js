import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import meo1 from "../assets/meo1.jpg";
import chuot1 from "../assets/chuot1.jpg"
import chuot2 from "../assets/chuot2.jpg"
import chuot3 from "../assets/chuot3.png"

const Screen3 = (props) => {
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
    <View style={{flexDirection:'row', alignItems:'center', marginTop:30, marginLeft:20}}>
    <Button title="Go Back"  onPress={()=> props.navigation.goBack()}/>
      <Text style={{color:'green', fontSize:15, marginLeft:30}}>Touch where you need to go!</Text>
      
      </View>

      <Animated.Image
        source={meo1}
        style={{ marginLeft: marginLeft, marginTop: marginTop, width:150, height:150 }}
      ></Animated.Image>
      <Animated.Image
        source={chuot1}
        style={{ marginLeft: marginLeft, marginTop: marginTop, width:100, height:100 }}
      ></Animated.Image>
      <Animated.Image
        source={chuot2}
        style={{ marginLeft: marginLeft, marginTop: marginTop, width:100, height:100 }}
      ></Animated.Image>
      <Animated.Image
        source={chuot3}
        style={{ marginLeft: marginLeft, marginTop: marginTop, width:100, height:100 }}
      ></Animated.Image>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Screen3;