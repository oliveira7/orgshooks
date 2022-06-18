import React, { useState } from "react";
import {
  StyleSheet,
  View,
} from 'react-native';

import Star from './Star';

export default function Stars({
  amount: oldAmount,
  editable = false,
  great = false,
}) {
  const [amount, setAmount] = useState(oldAmount)

  const RenderStars = () => {
    const starList = [];

    for (let i = 0; i < 5; i++) {
      starList.push(
        <Star
          key={i}
          onPress={() => setAmount(i + 1)}
          disabled={!editable}
          completed={i < amount}
          great={great}
        ></Star>
      );
    }
    return starList;
  }

  return <View style={styles.stars}>
    <RenderStars />
  </View>
}

const styles =  StyleSheet.create({
  stars: {
    flexDirection: 'row',
  }
});