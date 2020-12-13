import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import BottomNavigation from "./routes/bottom";

export default function Aplication() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </>
  );
}
