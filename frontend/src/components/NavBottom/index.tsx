import { View, Text, ViewProps, TouchableOpacity, Image } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import HomeIcon from "../../assets/icons/homeIcon.js";
import HearthIcon from "../../assets/icons/hearthIcon.js";
import ListIcon from "../../assets/icons/listIcon.js";
import ProfileIcon from "../../assets/icons/profileIcon.js";

import { styles } from "./styles";

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export function NavBottom() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {/* <AntIcon name="home" size={25} color="#000" /> */}
        <HomeIcon width={25} height={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        {/* <AntIcon name="hearto" size={25} color="#000" /> */}
        <HearthIcon width={25} height={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        {/* <FontAwesome5Icon name="clipboard-list" size={25} color="#000" /> */}
        <ListIcon width={25} height={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        {/* <FontAwesomeIcon name="user-circle-o" size={25} color="#000" /> */}
        <ProfileIcon width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
}
