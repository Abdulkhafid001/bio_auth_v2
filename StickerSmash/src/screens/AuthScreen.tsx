import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
const myImage = require("../../assets/1.png");

export default function Auth() {
  return (
    <View>
      <Image source={myImage} style={styles.image} />
      <Text style={styles.title}>StickerSmash</Text>
      <Text style={styles.description}>
        Add an emoji to your favorite image(s) and save to your device.
      </Text>
      <Text style={styles.description}>
        Remain calm and during authentication, for AI can detect abnormal logins.
      </Text>
      <TouchableOpacity 
    //   onPress={onAuthenticate} 
      style={styles.btn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#25292e",
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 400,
    height: 300,
    // display: 'flex',
    margin: 'auto'

  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 50,
    fontWeight: "400",
    marginVertical: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 30,
  },
});
