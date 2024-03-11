import { Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import {StatusBar} from "expo-status-bar/build/StatusBar";
import {Platform} from "react-native";
export default function HomeLayout() {
    return (
        <>
            <StatusBar style="light" />
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#E77D00",
            tabBarInactiveTintColor: "#808080",
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "bold",

            },
            tabBarStyle: {
                backgroundColor: "black",
                ...Platform.select({
                    ios: {
                        shadowColor: "#E77D00",
                        shadowOffset: { width: 0, height: -3 },
                        shadowOpacity: 0.1,
                        shadowRadius: 3,
                    },
                    android: {
                        elevation: 20,
                        shadowColor: "#000",
                    },
                }),
            },
            headerStyle: {
                backgroundColor: "black"
            },
            headerTintColor: "white",
            headerShadowVisible: false
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            style={{ marginBottom: -3}}
                            name="home"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            style={{ marginBottom: -3 }}
                            name="search"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="account/index"
                options={{
                    title: "Account",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            style={{ marginBottom: -3 }}
                            name="person"
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
            </>
    )
}
