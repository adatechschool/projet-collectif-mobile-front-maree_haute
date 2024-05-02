import { StyleSheet, View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Spot() {
  const { id } = useLocalSearchParams();

  // const fetchData = async () => {
  //   const response = await fetch(AIRTABLE_URL, {
  //     method: "GET",
  //     headers: {
  //       Authorization: TOKEN,
  //     },
  //   });
  //   const fetchedData = await response.json();
  //   //record.fields-> cherche les valeurs corrrespondantes à la clé fields du tableau data
  //   const records = fetchedData.records.map((record) => record.fields);
  //   // console.log(records);
  //   setData(records);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <View>
      <Text>ID: {id}</Text>
      <Text>BONJOUR !</Text>
    </View>
  );
}
