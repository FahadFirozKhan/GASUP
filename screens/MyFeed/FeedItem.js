import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';

import playIcon from '../../assets/play2.png';
import styles from './styles';

function feedItem({snippet, id, index}) {
  const {publishedAt, title, thumbnails, channelTitle} = snippet;
  const { maxres, standard} = thumbnails;
  const thumb = maxres ? maxres.url : standard.url;

  return (
    <View style={styles.feedCell}>
      <View style={styles.videoContainer}>
        <Image
          style={{flex: 1}}
          source={{uri: thumb}}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.playButton}>
          <Image
            style={styles.playIcon}
            source={playIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
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
