import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import userData from "../Data/data.js";

const HeadingBar = () => {
  return (
    <View style={styles.heading}>
      <View style={{ flexDirection: "row", alignItems: 'center' }}>
        <View style={styles.headingProfilePic}>
          <Image
            source={{ uri: userData.profilePic }}
            style={styles.profilePic}
          />
        </View>
        <View style={styles.headingText}>
          <Text style={styles.headingWelcome}>Hello</Text>
          <Text style={styles.headingUserName}>{userData.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default HeadingBar;

const styles = StyleSheet.create({
  heading: {
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 45,
    backgroundColor: "white",
    paddingBottom: 24,
  },
  headingProfilePic: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderRightWidth: 61,
    borderBottomWidth: 61,
    borderColor: "black",
    backgroundColor: "white",
    elevation: 5,
  },
  profilePic: {
    height: 60,
    width: 60,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
    borderColor: "black",
    backgroundColor: "white",
  },
  headingText: {
    height: 60,
    width: 'auto',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 14,
  },
  headingWelcome: {
    fontSize: 22,
    fontFamily: 'mob',
},
headingUserName:{
    fontSize: 24,
    fontFamily: 'mob-sb',
  }
});
