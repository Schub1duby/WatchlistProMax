import { Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import {StatusBar} from "expo-status-bar/build/StatusBar";
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
                backgroundColor: "black"
            },
            headerStyle: {
                backgroundColor: "black"
            },
            headerTintColor: "white",
            headerShadowVisible: false
        }}>
            <Tabs.Screen
                name="home/index"
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
