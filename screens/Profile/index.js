import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import OAuthManagerInstance from '../../utils/OAuthInstance';

import { AuthContext } from '../../context';

import { dummy_user_pic } from '../../utils/AppConstants';
import logoutIcon from '../../assets/logout.png';
import DetailField from './DetailFeild';
import styles from './styles';


function ProfileScreen(props) {
  const [isEditing, setEditMode] = useState(false); 
  const [username, setUsername] = useState("Administrative User"); 
  const [phone, setPhone] = useState("9987988712"); 
  const [email, setEmail] = useState("admin@gmail.com"); 
  const dispatch = useDispatch();
  const { signOut } = useContext(AuthContext);

  const onSignOut = () => {

    OAuthManagerInstance.deauthorize("github");
    signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topLeft}></View>
        <View style={styles.titleArea}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <TouchableOpacity style={styles.topRight} onPress={onSignOut}>
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
          source={{uri: dummy_user_pic}}
        />
        <Text style={styles.name}>{username}</Text>
        <View style={styles.form}>
        {[
          {fieldName: "Username", value: username, onValueChange: (v) => setUsername(v)},
          {fieldName: "Mobile number", value: phone, onValueChange: setPhone},
          {fieldName: "Email (optional)", value: email, onValueChange: setEmail},
        ].map(field => <DetailField {...field} isEditing={isEditing} />)}
        </View>
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
