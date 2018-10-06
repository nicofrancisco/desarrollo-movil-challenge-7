import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import { createStackNavigator } from "react-navigation";
import { TabNavigator, createBottomTabNavigator } from "react-navigation";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";

/*const RootStack = createStackNavigator({
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  }
});*/
const Tabs = createBottomTabNavigator({
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  },
  Screen3: {
    screen: Screen3
  }
});

export default class App extends React.Component {
  render() {
    return <Tabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
