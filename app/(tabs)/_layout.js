import { Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
export default function HomeLayout() {
    return (
        <Tabs screenOptions={{}}>
            <Tabs.Screen
                name="home/index"
                options={{
                    tabBarActiveBackgroundColor: "black",
                    headerShown: false,
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
                    headerShown: false,
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
                    headerShown: false,
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
    )
}
