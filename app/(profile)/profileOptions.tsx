import { StyleSheet, View, Text } from "react-native";
import React, { useContext } from "react";
import { images } from "@/constants/icons";
import SigningOption from "@/components/signingOption";
import ProfileOption from "@/components/profileOptionEntry";
import { AuthContext } from "@/contexts/authContext";
import { colors } from "@/constants/colors";
import ProfileCard from "@/components/profileCard";
import MainMenuArrow from "@/components/mainMenuArrow";
import SupportButton from "@/components/supportButton";

const ProfileOptions = () => {
  const user = useContext(AuthContext);
  return (
    <View style={{ height: "100%" }}>
      <MainMenuArrow/>
      
      {user.user == null && (
        <View style={styles.container}>
          <SigningOption
            src={images.login}
            title="Log In"
            route="(auth)/login"
          />
          <SigningOption
            src={images.register}
            title="Join Us"
            route="(auth)/register"
          />
        </View>
      )}
      {user.user != null && (

        <View style={styles.options}>
          <ProfileCard/>
          <SupportButton/>
          <Text style={styles.heading}> Account </Text>
          <ProfileOption
            seperator
            source={images.information}
            text="Profile Details"
            route="./profileDetails"
          />
          <ProfileOption
            source={images.history}
            seperator
            text="Order History"
            route="./history"
          />
          <ProfileOption
            source={images.address}
            seperator
            text="Manage Adresses"
            route="./addresses"
          />
          <ProfileOption
            source={images.logout}
            text="Log out"
            color="red"
            route="(tabs)/marketplace"
            onPress={() => {
              user.logout;
            }}
          />
          <Text style={styles.heading}> Support </Text>

          <ProfileOption
            source={images.support}
            text="Contact Support"
            route="(profile)/support"
     
          />
        </View>
      )}
    </View>
  );
};

export default ProfileOptions;

const styles = StyleSheet.create({
  container: {
    margin: "auto",
  },
  options: {
    paddingTop:20,
    backgroundColor: colors.LIGHT_GRAY,
  },
  heading: {
    fontWeight:"bold",
    marginLeft:15,
    marginBottom:15,


  }
});
