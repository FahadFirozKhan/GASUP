import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';

import { AuthContext } from '../../context';
import logoutIcon from '../../assets/logout.png'
import styles from './styles';

function ProfileScreen(props) {
  const [isEditing, setEditMode] = useState(false); 
  const [username, setUsername] = useState("Admin"); 
  const [phone, setPhone] = useState("9987988712"); 
  const [email, setEmail] = useState("admin@gmail.com"); 
  const dispatch = useDispatch();
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topLeft}></View>
        <View style={styles.titleArea}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <TouchableOpacity style={styles.topRight} onPress={signOut}>
          <Image
            style={styles.logout}
            source={logoutIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.profileCard}>
        <Image 
          style={styles.profilePic}
          source={null}
        />
        <Text style={styles.name}>John Doe</Text>
        <View style={styles.form}></View>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => setEditMode(editMode => !editMode)}  
        >
          <Text style={styles.btnText}>{isEditing ? "Save" : "Edit"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileScreen;
