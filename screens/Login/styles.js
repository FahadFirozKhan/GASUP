import { StyleSheet, Dimensions } from 'react-native';
import { SCREEN_WIDTH } from '../../utils/AppConstants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topRectangle: {
    width: SCREEN_WIDTH,
    height: 0.36 * SCREEN_WIDTH,
    backgroundColor: "#ff8c00",
  },
  topRightTriangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: SCREEN_WIDTH,
    borderTopWidth: 0.45 * SCREEN_WIDTH,
    borderLeftColor: "transparent",
    borderTopColor: "#ff8c00"
  },
  logoSpace: {
    position: "absolute",
    top: (0.36 * SCREEN_WIDTH) - 16,
    left: 16,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "transparent",
  },
  mainHeading: {
    fontWeight: "bold",
    fontSize: 32,
    margin: 32,
    marginTop: -50,
  },
  buttonArea: {
    width: SCREEN_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#ff8c00",
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
    marginRight: 0,
    paddingHorizontal: 36,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  gitHubButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderWidth: 0,
    height: 40,
    width: 220,
    borderRadius: 0,
    margin: 5,
    marginLeft: 0,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: SCREEN_WIDTH,
    height: 0.36 * SCREEN_WIDTH,
  },
  inputField: {
    margin: 16,
    marginHorizontal: 32,
  },
  fieldHeading: {
    color: "#b8b8b8",
    fontSize: 11,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  input: {
    flex: 1,
    padding: 10,
  },
  visibilityButton: {},
  visibilityIcon: {
    width: 20,
    height: 20,
    marginVertical: 10,
    tintColor: "#b8b8b8",
  },
  separator: {
    alignSelf: "stretch",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#b8b8b8"
  },
})