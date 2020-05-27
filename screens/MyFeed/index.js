import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

function MyFeedScreen({ navigation }) {

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
      />
    </View>
  );
}

export default MyFeedScreen;
