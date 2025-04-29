import { View, StyleSheet } from "react-native"
import { ThemedText } from "@/components/ThemedText"

const Page = () => {
  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.text}>Monster Hunter Info</ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D1117",
  },
  text: {
    color: "#FFD700",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  },
})

export default Page
