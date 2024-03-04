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
import { Entypo } from "@expo/vector-icons";

const Item = ({ item }) => (
  <View style={[styles.card]}>
    <View style={{ flexDirection: "row" }}>
      <Image source={{ uri: item.logo }} style={styles.logoImage} />
      <View style={{ flex: 1 }}>
        <View
          style={{
            // height: 50,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.cardHighlights}>{item.post}</Text>
          <Text style={styles.cardsubHeading}>{item.name}</Text>
        </View>
        <Text style={styles.location}>{item.location}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.salary}>${item.salaryStart}K - </Text>
          <Text style={styles.salary}>${item.salaryEnd}K</Text>
        </View>
      </View>
      <View style={{alignItems: "flex-end" }}>
        <Entypo name="dots-three-vertical" size={20} color="grey" style={{flex: 1}} />
        <Text style={[styles.hour]}>{item.timing}hr</Text>
      </View>
    </View>
  </View>
);

const Footer = () => {
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
  container: {},
  heading: {
    paddingHorizontal: 16,
    fontSize: 18,
    fontFamily: "mob-b",
  },
  card: {
    backgroundColor: "white",
    padding: 12,
    marginTop: 12,
    marginRight: 12,
    width: 335,
    height: 125.5,
    borderRadius: 8,
    borderWidth: 1,
    borderRightWidth: 3.5,
    borderBottomWidth: 3.5,
    borderColor: "black",
    elevation: 5,
  },
  logoImage: {
    marginTop: 5,
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1.25,
    borderColor: "black",
  },
  cardHighlights: {
    fontFamily: 'mob-b',
    fontSize: 16,
    paddingBottom: 8,
},
cardsubHeading: {
    fontFamily: 'mob-sb',
    fontSize: 14,
    paddingBottom: 2,
},
location: {
    fontFamily: 'mob',
    fontSize: 14,
    paddingBottom: 10,
  },
  salary: {
    fontFamily: 'mob-b',
    fontSize: 15,
    color: '#0063F7',
  },
  hour: {
    fontFamily: 'rob-b',
    fontSize: 18,
    color: '#06C270',
  }
});

export default Footer;
