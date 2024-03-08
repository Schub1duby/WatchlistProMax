import { Text, View } from 'react-native'
export default function Details() {
    const { detailUrl } = useLocalSearchParams()
return (
    <View>
        <Text>Details for {detailUrl}</Text>
    </View>
)}

