import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../styles/genericDimensions";

export const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(20),
    borderTopEndRadius: moderateScale(25),
    borderTopStartRadius: moderateScale(25),
    gap: moderateScale(20),
  },
  midscreenMessages: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(200),
  },
  midscreenMessagesText: {
    fontSize: moderateScale(20),
    textAlign: "center",
    fontFamily: "BalooSemiBold",
    marginTop: moderateScale(20),
  },
  scrollView: {
    borderTopEndRadius: moderateScale(25),
    borderTopStartRadius: moderateScale(25),
  },
});
