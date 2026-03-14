import { FlatList, Text, View } from "react-native";

const sports = [
  { id: "1", name: "Futsal" },
  { id: "2", name: "Vôlei" },
  { id: "3", name: "Basquete" },
  { id: "4", name: "E-sports" },
];

export default function Modalidades() {
  return (
    <FlatList
      data={sports}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{padding:20,borderBottomWidth:1}}>
          <Text style={{fontSize:18}}>{item.name}</Text>
        </View>
      )}
    />
  );
}