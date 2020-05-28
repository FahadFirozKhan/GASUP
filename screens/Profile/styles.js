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
  profileCard: {
    margin: 30,
    marginTop: 60,
    backgroundColor: "white",
    borderRadius: 24,
    width: SCREEN_WIDTH - 60,
    height: SCREEN_WIDTH,
    elevation: 2,
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {width: 2, height: 2}
  },
  profilePic: {
    position: "absolute",
    height: 100,
    width: 100,
    borderRadius: 50,
    left: ((SCREEN_WIDTH - 60) / 2) - 50,
    top: -50,
    backgroundColor: "#d9d9d9"
  },
  name: {
    color: "#000",
    fontSize: 20,
    alignSelf: "stretch",
    marginTop: 68,
    marginBottom: 16,
    textAlign: "center" 
  },
  form: {},
  editBtn: {
    position: "absolute",
    height: 40,
    borderRadius: 20,
    width: 100,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    left: ((SCREEN_WIDTH - 60) / 2) - 50,
    bottom: -20,
  },
  btnText: {
    color: "white"
  },
})