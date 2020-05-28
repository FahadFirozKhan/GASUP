import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getVideos, getMoreVideos } from '../../redux/actions/FeedActions';
import FeedItem from './FeedItem';
import styles from './styles';

function MyFeedScreen({ navigation }) {
  const nextPageToken = useSelector(state => state.feeds.nextPageToken)
  const feedList = useSelector(state => state.feeds.feed)
  const dispatch = useDispatch();

  const loadMoreVideos = () => {
    if (!nextPageToken) return;

    dispatch(getMoreVideos(nextPageToken))
  }
  
  useEffect(() => {

    dispatch(getVideos())
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.subTitle}>TODAY</Text>
        <View style={styles.feedRow}>
          <Text style={styles.heading}>My Feed</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.userPic}
              source={null}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={feedList}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => <FeedItem {...item} index={index}/>}
        onEndReached={loadMoreVideos}
      />
    </View>
  );
}

export default MyFeedScreen;
