import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="modalidades" options={{ title: "Modalidades" }} />
      <Tabs.Screen name="classificacao" options={{ title: "Classificação" }} />
      <Tabs.Screen name="calendario" options={{ title: "Calendário" }} />
    </Tabs>
  );
}