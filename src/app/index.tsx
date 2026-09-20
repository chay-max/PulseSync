import { Text, View, StyleSheet, Pressable} from "react-native";
import { Image } from "expo-image";
import { globalStyles } from "@/styles/global";
import { PulseLogo } from "@/assets/logo";
import Block from "@/components/block";
export default function Index() {
  return <View style={globalStyles.container}>
    <Text style={globalStyles.title}>{<PulseLogo></PulseLogo>}PulseSync</Text>
    <Image source={require('@/assets/image/peoplenature.jpg')} contentFit="cover" contentPosition={"center"} style={styles.image}></Image>
    <Text style={globalStyles.secondTitle}>A place to create your imagination for 24 hours</Text>
    <Pressable style={globalStyles.button}><Text style={globalStyles.title}>Sign in</Text></Pressable>
  </View>
}
const styles = StyleSheet.create({
  image:{
        height: 220,
        width: 380,
        borderRadius: 30,
        overflow: 'hidden',
  }
});
