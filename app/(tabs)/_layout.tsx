import { Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
export default function HomeLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home/index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            style={{ marginBottom: -3 }}
                            name="compass"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore/index"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            style={{ marginBottom: -3 }}
                            name="compass"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: "Favorites",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            style={{ marginBottom: -3 }}
                            name="compass"
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
