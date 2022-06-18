import React from 'react';
import {
  TouchableOpacity, Image, StyleSheet
} from 'react-native';

import star from '../assets/estrela.png';
import starGray from '../assets/estrelaCinza.png'

export default function Star({
  onPress,
  disabled = true,
  completed,
  great = false,

}) {
  const getImage = () => {
    if (completed) {
      return star;
    }
    return starGray;
  }

  const styles = stylesFunc(great);

  return <TouchableOpacity
    onPress={onPress}
    disabled={!disabled}
  >
    <Image style={styles.star} source={getImage()}></Image>
  </TouchableOpacity>
}

const stylesFunc = (great) => StyleSheet.create({
  star: {
    width: great ? 36 : 12,
    height: great ? 36 : 12,
    marginRight: 2,
  }
});