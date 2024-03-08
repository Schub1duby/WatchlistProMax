import { Text, View } from 'react-native'
import {useLocalSearchParams} from "expo-router";
export default function Details() {
    const { detailUrl } = useLocalSearchParams()
return (
    <View>
        <Text>Details for {detailUrl}</Text>
    </View>
)}

