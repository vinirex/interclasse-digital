import { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";

export default function Calendario() {

  const [games,setGames] = useState<any[]>([]);

  const addGame = () => {

    const newGame = {
      id: Date.now(),
      sport: "Futsal",
      match: "3º ADS vs 2º ES",
      time: "14:00",
      place: "Quadra 1"
    };

    setGames([...games,newGame]);

  };

  return (

    <View style={{flex:1}}>

      <Button title="Adicionar Jogo" onPress={addGame} />

      <FlatList
        data={games}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
          <View style={{padding:20,borderBottomWidth:1}}>
            <Text>{item.sport}</Text>
            <Text>{item.match}</Text>
            <Text>{item.time} - {item.place}</Text>
          </View>
        )}
      />

    </View>

  );
}