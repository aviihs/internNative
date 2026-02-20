import {  View } from "react-native";
import { Button, Text } from 'react-native-paper';


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-blue-600 font-semibold text-lg">Edit app/index.tsx to edit this screen.</Text>
      <Button icon="play-circle-outline" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
    </View>
  );
}
