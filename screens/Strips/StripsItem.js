import React from 'react';
import { useDispatch } from 'react-redux';
import { updateValue } from '../../redux/actions/StripsAction';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function StripsItem({item, index, lastIndex}) {
  const rowIndex = index;
  const dispatch = useDispatch();

  const updateSelected = valueIndex => {

    dispatch(updateValue({
      x_index: rowIndex,
      y_index: valueIndex,
    }))
  }

  const styleResolver = () => {

    switch (rowIndex) {
      case 0:
        return [
          styles.colorSelectedArea,
          {
            height: 100,
            marginTop: 2,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }
        ]

      case lastIndex:
        return [
          styles.colorSelectedArea,
          {
            height: 100,
            marginBottom: 2,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }
        ]

      default: return styles.colorSelectedArea
    }
  }

  return (
    <View style={styles.stripsContainer}>
      <View style={styles.leftView}>
        <View style={styleResolver()}>
          <View style={[styles.colorSelected, {backgroundColor: item.colors[item.value]}]} />
        </View>
      </View>
      <View style={styles.rightView}>
        <View style={styles.titleView}>
          <Text style={styles.stripTitle}>{item.title}</Text>
          <TextInput
            style={styles.input}
            value={`${item.values[item.value]}`}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.stripsView}>
          {!!Array.isArray(item.values) && item.values.map(
            (value, index) => (
              <View style={styles.itemValue} key={index}>
                <TouchableOpacity
                  style={[
                    styles.colorStripArea,
                    {backgroundColor: item.value===index ? "lightgreen" : "white"}
                  ]}
                  onPress={() => updateSelected(index)}
                >
                  <View style={[styles.colorStrip, {backgroundColor: item.colors[index]}]} />
                </TouchableOpacity>
                <Text style={styles.colorValue}>{value}</Text>
              </View>
            )
          )}
        </View>
      </View>
    </View>
  )
}

export default StripsItem;
