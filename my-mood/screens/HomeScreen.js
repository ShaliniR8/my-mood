import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddNoteButton from "../components/addNoteButton";
const HomeScreen = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Home! In Safe Area. </Text>
      <StatusBar style="auto" />
      <Button title="Go to Blue Side" onPress={() => nav.navigate("Blues")} />
      <AddNoteButton color= {'blue'}/>
    </SafeAreaView>
  );
};

export default HomeScreen;
