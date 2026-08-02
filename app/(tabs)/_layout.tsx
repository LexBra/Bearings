import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import type { ComponentProps } from "react";
import type { ColorValue } from "react-native";

import { colors, fontFamilies } from "@/theme";

type IconName = ComponentProps<typeof Ionicons>["name"];

function tabIcon(outline: IconName, solid: IconName) {
  return ({
    color,
    focused,
    size,
  }: {
    color: ColorValue;
    focused: boolean;
    size: number;
  }) => (
    <Ionicons
      color={color}
      name={focused ? solid : outline}
      size={size}
    />
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.ink,
        tabBarInactiveTintColor: colors.soil,
        tabBarStyle: {
          backgroundColor: colors.cream,
          borderTopColor: colors.soil,
        },
        tabBarLabelStyle: {
          fontFamily: fontFamilies.mono,
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: tabIcon("home-outline", "home"),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: tabIcon("search-outline", "search"),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: tabIcon("bookmark-outline", "bookmark"),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: tabIcon("map-outline", "map"),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: tabIcon("person-outline", "person"),
        }}
      />
    </Tabs>
  );
}
