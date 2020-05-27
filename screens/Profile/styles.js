import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../utils/AppConstants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f79145",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topSection: {
    flexDirection: "row",
    marginTop: 32,
    width: SCREEN_WIDTH,
    height: 50,
  },
  topLeft: {
    width: SCREEN_WIDTH * 0.3,
    height: 50,
  },
  topRight: {
    width: SCREEN_WIDTH * 0.3,
    height: 50,
  },
  logout: {
    width: SCREEN_WIDTH * 0.3,
    height: 50,
  },
  titleArea: {
    width: SCREEN_WIDTH * 0.4,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
  },
})