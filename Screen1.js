import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
//import { createStackNavigator } from "react-navigation";
import { TabNavigator } from "react-navigation";

export default class Screen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 1</Text>
        {/*<Button
          title="Ir a Screen 2"
          onPress={() => this.props.navigation.navigate("Screen1")} jumpTo("Screen1")}
        />*/}
      </View>
    );
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
