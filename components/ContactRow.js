import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ContactRow = ({ name, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} >
      <View style={styles.avatar}>
        <Text style={styles.avatarLabel}>
          {name
            .split("1")
            .reduce((prev, current) => `${prev}${current[0]}`, "")}
        </Text>
      </View>

      <View style={styles.textsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    backgroundColor: "#2196f3",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarLabel: {
    fontSize: 20,
    color: "white",
  },
  textsContainer: {
    flex: 1,
    marginStart: 16,
  },
  name: {
    fontSize: 16,
  },
  subtitle: {
    marginTop: 2,
    color: "#565656",
  },
});

export default ContactRow;
