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
  list: {
    flex: 1,
    backgroundColor: "#f1f1f1"
  },
  feedCell: {
    width: SCREEN_WIDTH - 32,
    height: (SCREEN_WIDTH - 32) * 9 / 16 + (100 - 16),
    margin: 16,
    marginTop: 12,
    marginBottom: 0,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.45,
    shadowRadius: 5,
    shadowOffset: {width: 2, height: 2},
  },
  videoContainer: {
    width: SCREEN_WIDTH - 32,
    height: (SCREEN_WIDTH - 32) * 9 / 16,
  },
  playButton: {
    position: "absolute",
    width: 40,
    height: 40,
    left: ((SCREEN_WIDTH - 32) / 2) - 20,
    top: ((SCREEN_WIDTH - 32) * 9 / 32) - 20,
  },
  playIcon: {
    width: 40,
    height: 40,
  },
  detailSection: {
    width: SCREEN_WIDTH - 32,
    height: 100,
    padding: 10,
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: -16,
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  feedCelltopSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  status: {
    fontSize: 10,
    color: "steelblue",
  },
  timeago: {
    fontSize: 11,
    color: "#b9b9b9",
  },
  title: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginVertical: 8,
  },
  uploader: {
    fontSize: 11,
    color: "#b9b9b9",
  },
})