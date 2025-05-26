import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";
import { colors } from "@/constants/colors";
import { images } from "@/constants/icons";

const ProfileCard = () => {
  const user = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image source={images.profile} style={styles.icon} />
      <View style={styles.textContainer}>

        <Text style={styles.text}> Hello {user.user?.fullName}</Text>
        <Text style={styles.text}> {user.user?.phoneNumber} </Text>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 50,
    borderWidth: 1,
    padding: 15,
    margin:50,
    backgroundColor:colors.LIGHT_GRAY

  },
  icon: {
    marginRight:30,
    width: 74,
    height: 74,
  },
  textContainer: {justifyContent:"center"},
  text: {
    marginTop:10,
    fontWeight:"bold"
  },
});
