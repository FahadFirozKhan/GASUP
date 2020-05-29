import React, { useState, useEffect, useCallback } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';
import moment from 'moment';

import { updateCurrentlyPlayingVideoId } from '../../redux/actions/FeedActions';

import { SCREEN_WIDTH } from '../../utils/AppConstants';
import playIcon from '../../assets/play2.png';
import styles from './styles';

const itemWidth = SCREEN_WIDTH - 32
const videoWidth = itemWidth + 16
const videoHeight = (itemWidth * (9 / 16)) 


const VideoErrorCard = ({errorMessage}) => (
  <View style={styles.privateVideo}>
    <Text style={styles.videoError}>
      {errorMessage || "This video is either private or not available in your region."}
    </Text>
  </View>
)

const VideoLoadingCard = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="small" color="darkorange" />
  </View>
)

const VideoThumbCard = ({onPlay}) => (
  <TouchableOpacity style={styles.playButton} onPress={onPlay}>
    <Image
      style={styles.playIcon}
      source={playIcon}
      resizeMode="contain"
    />
  </TouchableOpacity>
)


function feedItem({snippet, id, index}) {
  const {publishedAt, title, thumbnails, channelTitle} = snippet;
  const { maxres, standard, high, medium } = thumbnails;
  const thumb = maxres?.url || standard?.url || high?.url || medium.url;

  const currentlyPlaying = useSelector(state => state.feeds.currentlyPlayingId);
  const [playing, setPlaying] = useState(false);
  const [playerError, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  const onPlayerReadyCall = useCallback(() => setLoading(false), [])

  const onPlayerErrorCall = useCallback(error => {
    switch (error) {
      case "invalid_parameter": setError('The video URL is invalid.'); break
      case "HTML5_error": setError('This video is not HTML5 compatible.'); break
      case "video_not_found": 
        setError('This video is either private or has been removed.'); break
      case "embed_not_allowed": 
        setError('The owner has disallowed the video to be played in embedded players.')
    }
  }, [])

  const onPlayerChangeStateCall = useCallback(event => {
    switch (event) {
      case "ended":
      case "paused": if (!!playing) setPlaying(false); 
        break
      case "playing": if (!playing) setPlaying(true);
        break
    }
  }, [id, playing])


  return (
    <View style={styles.feedCell}>
      <View style={styles.videoContainer}>
        <ImageBackground
          style={{flex: 1}}
          source={{uri: thumb}}
          resizeMode="cover"
        >
        {!!playerError
          ? <VideoErrorCard errorMessage={playerError} />
          : id===currentlyPlaying
            ? (
                <View style={styles.ytPlayerWrapper}>
                  <YoutubePlayer
                    height={videoHeight}
                    width={videoWidth}
                    videoId={id}
                    play={playing}
                    onChangeState={onPlayerChangeStateCall}
                    onReady={onPlayerReadyCall}
                    onError={onPlayerErrorCall}
                    volume={50}
                    mute={false}
                    playbackRate={1}
                    initialPlayerParams={{
                      cc_lang_pref: "us",
                      iv_load_policy: 3,
                    }}
                    webViewStyle={{
                      width: videoWidth,
                      height: videoHeight,
                      marginStart: -8,
                      marginTop: -4.5,
                    }}
                    webViewProps={{
                      bounces: false,
                      scrollEnabled: false,
                    }}
                  />
                </View>
              )
            : <VideoThumbCard 
                onPlay={() => {
                  setPlaying(true)
                  dispatch(updateCurrentlyPlayingVideoId(id))
                }}
              />
        }
        </ImageBackground>
      </View>
      <View style={styles.detailSection}>
        <View style={styles.feedCelltopSection}>
          <Text style={styles.status}>New</Text>
          <Text style={styles.timeago}>{moment(publishedAt).fromNow()}</Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{title}</Text>
        <Text style={styles.uploader}>{channelTitle}</Text>
      </View>
    </View>
  );
}

export default feedItem;
