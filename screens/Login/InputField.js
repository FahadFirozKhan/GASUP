import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

import peakIcon from '../../assets/peak.png';
import maskIcon from '../../assets/mask.png'; 
import styles from './styles';

function InputFieldComponent({ heading, text, onValueChange, visibilityMask, customStyle = {} }) {
  const [isMasked, setMaskedStatus] = useState(true);

  return (
    <View style={[styles.inputField, customStyle]}>
      <Text style={styles.fieldHeading}>{heading}</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={text => onValueChange(text)}
          secureTextEntry={visibilityMask && isMasked}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        {visibilityMask && (
          <TouchableOpacity 
            style={styles.visibilityButton} 
            onPress={() => setMaskedStatus(masked => !masked)}
          >
            <Image
              style={styles.visibilityIcon}
              source={isMasked ? peakIcon : maskIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.separator}/>
    </View>
  );
}

export default InputFieldComponent;
