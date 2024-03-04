import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { companyData } from "../Data/data";

const Item = ({ item }) => (
  <View style={[styles.card, { backgroundColor: item.backgroundColorTheme }]}>
    <View style={{ flexDirection: "row", paddingBottom: 23.58 }}>
      <Image source={{ uri: item.logo }} style={styles.logoImage} />
      <View style={{ justifyContent: "space-around" }}>
        <Text style={styles.cardHighlights}>{item.name}</Text>
        <Text style={styles.cardStatus}>{item.status}</Text>
      </View>
    </View>
    <View style={{ flexDirection: "row", alignItems: "baseline", paddingBottom: 10}}>
      <Text style={styles.jobRank}>{item.jobRank}</Text>
      <Text style={{ fontFamily: "rob-sb", fontSize: 15 }}>Jobs</Text>
    </View>
    <View style={{marginBottom: 22.55}}>
      <Text style={styles.discription}>Get Recruited by Top MNCs with Recuroote.</Text>
    </View>
  </View>
);

const JobOptions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {" "}
        Total Companies ({companyData.length}){" "}
      </Text>
      <FlatList
        style={[{ paddingLeft: 16 }]}
        horizontal
        data={companyData}
        // keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  heading: {
    paddingHorizontal: 16,
    fontSize: 18,
    fontFamily: "mob-b",
  },
  card: {
    padding: 22.55,
    marginTop: 24,
    marginRight: 16,
    height: 225,
    width: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderRightWidth: 3.5,
    borderBottomWidth: 3.5,
    borderColor: "black",
    elevation: 5,
  },
  logoImage: {
    height: 43.26,
    width: 43.26,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  cardHighlights: {
    fontFamily: "mob-b",
    fontSize: 18,
  },
  cardStatus: {
    fontFamily: "mob",
    fontSize: 15,
  },
  jobRank: {
    fontFamily: "mob-b",
    fontSize: 24,
    paddingRight: 1,
  },
  discription: {
    fontFamily: "mob",
    fontSize: 15,
    paddingRight: 1,
  },
});

export default JobOptions;
