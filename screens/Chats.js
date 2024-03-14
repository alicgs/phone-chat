import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ContactRow from "../components/ContactRow";
import Separator from "../components/Separator";

const Chats = () => {
  return (
    <SafeAreaView>
      <ContactRow name="Ali CIGIS" subtitle="Hi" onPress={() => {
        alert("hi, Ali CIGIS Touched!")
      }} />
      <Separator/>
      <ContactRow name="My Best" subtitle="Lorem " onPress={() => {
        alert("hi, My Best Touched!")
      }} />
    </SafeAreaView>
  );
};


export default Chats;
