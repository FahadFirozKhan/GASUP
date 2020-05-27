import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../utils/AppConstants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  topSection: {
    width: SCREEN_WIDTH,
    height: 108,
    backgroundColor: "#f5f5f5",
    borderBottomColor: "#d2d2d2",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
    paddingTop: 32,
    justifyContent: "flex-end",
    alignItems: "stretch"
  },
  subTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#d2d2d2",
  },
  feedRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  heading: {
    fontSize: 31,
    fontWeight: "bold",
    color: "#000",
  },
  userPic: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#d2d2d2",
  },
  list: {},
})