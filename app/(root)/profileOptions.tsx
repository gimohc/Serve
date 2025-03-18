import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Seperator from "@/components/seperator";
import { images } from "@/constants/icons";
import SigningOption from "@/components/signingOption";

interface ProfileOptionsProps {
  loggedIn: boolean;
}
const ProfileOptions = ({ loggedIn }: ProfileOptionsProps) => {
  return (
    <View style={{height:"100%"}}>
      {!loggedIn && (
        <View style={styles.container}>
            <SigningOption src={images.login}  title="Log In" route="(auth)/login"/>
            <SigningOption src={images.register} title="Join Us" route="(auth)/register"/>

            
        </View>
        
      )}
      {loggedIn && (
        <View>
          <Seperator style={{ width: "50%" }} />
        </View>
      )}
    </View>
  );
};

export default ProfileOptions;

const styles = StyleSheet.create({
  container: {
    margin:"auto",
  },
  
});
