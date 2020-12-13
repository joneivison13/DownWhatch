import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../Screens/Home";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          switch (route.name) {
            case "HOME":
              icon = "home";
              break;
            case "FAVORITOS":
              icon = "star-outline";
              break;
            case "ESTATISTICAS":
              icon = "pie-chart-outline";
              break;

            default:
              break;
          }
          return <Ionicons size={size} color={color} name={icon} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ddd",
        style: {
          backgroundColor: "#18181B",
          borderTopColor: "#181818",
        },
      }}
    >
      <Tab.Screen name="HOME" component={Home} options={{ title: "Inicio" }} />
      <Tab.Screen
        name="FAVORITOS"
        component={Home}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name="ESTATISTICAS"
        component={Home}
        options={{ title: "Estatisticas" }}
      />
    </Tab.Navigator>
  );
}
