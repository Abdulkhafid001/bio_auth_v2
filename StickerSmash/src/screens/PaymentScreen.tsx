import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import CardSVG from "../components/CardSVG";

import { useRouter } from "expo-router";

interface PaymentScreenProps {
  setIsAuthenticated: (value: boolean) => void;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({
  setIsAuthenticated,
}) => {
  // const navigation = useNavigation();
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Image
        source={{
          uri: "https://thumbs.dreamstime.com/b/headshot-portrait-smiling-businessman-posing-office-profile-picture-young-caucasian-suit-glasses-pose-modern-happy-214577125.jpg",
        }}
        style={styles.image}
      />
      <Text style={{ color: "gray", fontWeight: "bold", marginTop: 15 }}>
        PAYING{" "}
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 15 }}>
        Robert Downey, Jr.{" "}
      </Text>
      <Text style={{ fontSize: 55, fontWeight: "500", marginBottom: 15 }}>
        $50.00
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Add a note"
        placeholderTextColor="gray"
      />
      {/* <CardSVG /> */}
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/AppHomepage")}
        style={styles.btn}
      >
        <Text style={styles.text}>Start adding emoji to photo's</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setIsAuthenticated(false)}
        style={styles.btn}
      >
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    height: 50,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#00000010",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  btn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0893FC",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    marginTop: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    // alignSelf: "flex-start",
    textAlign: "center",
    paddingLeft: 15,
    paddingBottom: 20,
  },
});

export default PaymentScreen;
