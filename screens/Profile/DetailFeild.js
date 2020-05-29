import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

function DetailFieldComponent({isEditing, fieldName, value, onValueChange}) {
  // const [currValue, setCurrValue] = useState(value);

  return (
    <View style={styles.fieldContainer}>
      {isEditing ? <TextInput style={styles.fieldInput}
          // value={currValue}
          value={value}
          onChangeText={text => {
            onValueChange(text)
            // setCurrValue(text)
          }}
        /> : <Text style={styles.fieldValue}>
          {/* {currValue} */}
          {value}
        </Text>
      }
      <Text style={styles.fieldName}>
        {fieldName}
      </Text>
    </View>
  )
}

export default DetailFieldComponent;
