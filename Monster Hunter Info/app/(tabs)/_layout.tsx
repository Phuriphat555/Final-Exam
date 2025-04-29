import { Tabs } from "expo-router"
import { Platform, Image } from "react-native"

import { HapticTab } from "@/components/HapticTab"
import { IconSymbol } from "@/components/ui/IconSymbol"
import TabBarBackground from "@/components/ui/TabBarBackground"
import { useColorScheme } from "@/hooks/useColorScheme"

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light"

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFD700", // Gold to match theme
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "rgba(13, 17, 23, 0.95)",
          },
          default: {
            backgroundColor: "#0D1117",
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Monsters",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/70px-MHWilds-Head_Icon_White.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: color,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 4,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="weapons"
        options={{
          title: "Weapons",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/weapons/great_sword.png.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: color,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 4,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="armorsets"
        options={{
          title: "Armor",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/armors/Helmet_Icon_White.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: color,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 4,
              }}
            />
          ),
        }}
      />

      {/* Hide detail screens from tab bar */}
      <Tabs.Screen
        name="monster-detail"
        options={{
          href: null, // This prevents the screen from showing in the tab bar
        }}
      />
      <Tabs.Screen
        name="weapon-detail"
        options={{
          href: null, // This prevents the screen from showing in the tab bar
        }}
      />
      <Tabs.Screen
        name="armor-detail"
        options={{
          href: null, // This prevents the screen from showing in the tab bar
        }}
      />
    </Tabs>
  )
}
