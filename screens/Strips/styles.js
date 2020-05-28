import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../utils/AppConstants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    padding: 8,
  },
  nextBtn: {
    alignSelf: "flex-end",
    height: 22,
    width: 48,
    borderRadius: 11,
    backgroundColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  btnText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white"
  },
  heading: {
    marginVertical: 20,
    fontSize: 32,
    fontWeight: "bold",
    color: "#0e2e66",
  },
  list: {
    // flex: 1,
  },
  listContent: {
    width: SCREEN_WIDTH,
    minHeight: 102 * 6,
    paddingBottom: 100,
  },
  stripsContainer: {
    flexDirection: "row",
    height: 102,
    width: SCREEN_WIDTH,
    margin: 0,
  },
  leftView: {
    height: 102,
    width: 32,
  },
  colorSelectedArea: {
    height: 102,
    width: 18,
    marginLeft: 14,
    borderLeftWidth: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: "#d9d9d9"
  },
  colorSelected: {
    height: 18,
    width: 16,
    marginTop: 41,
  },
  rightView: {
    height: 102,
    width: SCREEN_WIDTH - 32,
  },
  titleView: {
    height: 40,
    width: SCREEN_WIDTH - 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  stripTitle: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "bold",
    color: "#aaa"
  },
  input: {
    width: 68,
    height: 28,
    marginRight: 16,
    borderColor: "#ccc",
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
    textAlign: "center",
    color: "#aaa"
  },
  stripsView: {
    width: SCREEN_WIDTH - 32,
    height: 62,
    flexDirection: "row",
    paddingLeft: 8,
  },
  itemValue: {
    width: (SCREEN_WIDTH - 56) / 5,
    height: 62
  },
  colorStripArea: {
    width: (SCREEN_WIDTH - 56) / 5,
    height: 22,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  colorStrip: {
    width: ((SCREEN_WIDTH - 56) / 5) - 4,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#fff",
  },
  colorValue: {
    width: (SCREEN_WIDTH - 56) / 5,
    height: 30,
    marginVertical: 5,
    textAlign: "center",
    color: "#aaa",
  },
})