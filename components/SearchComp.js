import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { jobTitles } from "../Data/data";

const Item = ({ title, text }) => (
  <View
    style={[
      styles.scrollerTitle,
      text === title
        ? { backgroundColor: "#7C4FFF" }
        : { backgroundColor: "white" },
    ]}
  >
    <Text style={[ text === title ? { color: "white", fontFamily: 'mob-b' } : { color: "black", fontFamily: 'mob'}]}>
      {title}
    </Text>
  </View>
);

const SearchComp = () => {
  const [text, setText] = useState("All");
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", paddingHorizontal: 16 }}>
        <View style={styles.searchBar}>
          <Feather
            name="search"
            size={33.15}
            color="black"
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>Search</Text>
        </View>
        <View style={styles.filterButton}>
          <Ionicons
            name="filter"
            size={25}
            color="white"
            style={styles.filterIcon}
          />
        </View>
      </View>

      <FlatList
        style={{ paddingLeft: 16 }}
        horizontal
        data={jobTitles}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setText(item)}
            style={{ marginTop: 16 }}
          >
            <Item title={item} text={text} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: "white",
    paddingBottom: 24,
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
    elevation: 5,
    paddingVertical: 10,
  },
  searchIcon: {
    paddingHorizontal: 16,
  },
  searchText: {
    fontSize: 21,
    fontFamily: "mob",
  },
  filterButton: {
    padding: 16,
    marginLeft: 16,
    backgroundColor: "#7C4FFF",
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: "black",
    elevation: 5,
  },
  filterIcon: {},
  scrollerTitle: {
    marginRight: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: "black",
    elevation: 5,
  },
});
export default SearchComp;
