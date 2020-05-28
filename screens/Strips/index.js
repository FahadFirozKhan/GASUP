import React, { useEffect } from 'react';
import { 
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getInititalValues } from '../../redux/actions/StripsAction';
import StripsItem from './StripsItem';
import styles from './styles';

function StripScreen(props) {
  const initialValues = useSelector(state => state.strips.initialValues);
  const valuesLoaded = useSelector(state => state.strips.valuesLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getInititalValues())
  }, [])

  const nextTapped = () => {
    if (!valuesLoaded) return;

    Alert.alert(
      "Selected Values",
      `Total Hardness: ${initialValues[0].values[initialValues[0].value]} ppm
Total Chlorine: ${initialValues[1].values[initialValues[1].value]} ppm
Free Chlorine: ${initialValues[2].values[initialValues[2].value]} ppm 
pH: ${initialValues[3].values[initialValues[3].value]} ppm
Total Alkalinity: ${initialValues[4].values[initialValues[4].value]} ppm
Cyanuric Acid: ${initialValues[5].values[initialValues[5].value]} ppm
      `
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.nextBtn} onPress={nextTapped}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Test Strip</Text>
      {valuesLoaded && (
        <KeyboardAvoidingView behavior="padding" enabled>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContent}
            data={initialValues}
            keyExtractor={(item) => item.id}
            renderItem={(rowData) => <StripsItem {...rowData} lastIndex={initialValues.length - 1}/>}
            showsVerticalScrollIndicator={false}
          />
        </KeyboardAvoidingView>
        )
      }
    </View>
  );
}

export default StripScreen;
