import { Text, View, StyleSheet, Pressable} from "react-native";
import { Image } from "expo-image";
import { globalStyles } from "@/styles/global";
import { PulseLogo } from "@/assets/logo";
export default function Welcome() {
  return<>
  <View style={globalStyles.container}>
    <Text style={globalStyles.title}>{<PulseLogo></PulseLogo>}PulseSync</Text>
    <Image source={require('@/assets/image/peoplenature.jpg')} contentFit="cover" contentPosition={"center"} style={styles.image}></Image>
    <Text style={globalStyles.secondTitle}>A place to create your imagination for 24 hours</Text>
  </View>
  <View style={styles.block}>
      <Pressable style={globalStyles.button}><Text style={globalStyles.title}>Get Started</Text></Pressable>
  </View>
  </> 
}
const styles = StyleSheet.create({
  image:{
        height: 220,
        width: 380,
        borderRadius: 30,
        overflow: 'hidden',
  },
  block:{
    flex: 1,
    backgroundColor: '#233D4D',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
