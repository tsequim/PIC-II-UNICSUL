import { View, Text } from "react-native";
import React from "react";

import { ProfileName } from "../../components/screens/Profile/ProfileName";
import { ProfileOptions } from "../../components/screens/Profile/ProfileOptions";

export function Profile({ navigation }: any) {
  return (
    <View>
      <ProfileName />
      <ProfileOptions navigation={navigation} />
    </View>
  );
}
