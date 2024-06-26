import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../../../styles/genericDimensions";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  modalCard: {
    zIndex: 2,
    marginBottom: verticalScale(40),
    width: "95%",
    height: "70%",
    borderRadius: moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    shadowOffset: {
      width: horizontalScale(15),
      height: verticalScale(20),
    },
    shadowColor: "black",
    shadowOpacity: 0.05,
    borderColor: colors.thirdary,
    borderWidth: moderateScale(3),
  },

  inputBox: {
    fontFamily: "BalooRegular",
    fontSize: moderateScale(22),
    backgroundColor: colors.foreground,
    height: verticalScale(40),
    width: "100%",
    borderRadius: moderateScale(10),
    paddingLeft: horizontalScale(15),
  },
});
