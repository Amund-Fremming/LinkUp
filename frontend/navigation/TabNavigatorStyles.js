import { StyleSheet } from "react-native";
import {
  moderateScale,
  verticalScale,
} from "../styles/genericDimensions";
import { colors } from "../styles/colors";

export default StyleSheet.create({
  icons: {
    fontSize: moderateScale(25),
    marginTop: verticalScale(7),
  },
  plus: {
    fontSize: moderateScale(33),
    marginTop: verticalScale(7),
  },
  tabLabel: {
    marginBottom: verticalScale(-4),
    fontWeight: "600",
  },
});
