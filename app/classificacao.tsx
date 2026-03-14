import { FlatList, Text, View } from "react-native";

const ranking = [
  { team: "3º ES Paulista", points: 9 },
  { team: "2º ES Lins", points: 7 },
  { team: "1º ADS", points: 5 },
];

export default function Classificacao() {
  return (
    <FlatList
      data={ranking}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={{padding:20,borderBottomWidth:1}}>
          <Text>{item.team}</Text>
          <Text>Pontos: {item.points}</Text>
        </View>
      )}
    />
  );
}