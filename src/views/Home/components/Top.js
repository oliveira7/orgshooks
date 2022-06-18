import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

import logo from '../../../assets/logo.png';
import { loadTop } from '../../../services/loadingMocks';

class Top extends React.Component {
  state = {
    top: {
      welcome: '',
      subtitle: ''
    }
  }

  updateTop() {
    const response = loadTop();
    this.setState({ top: response });
  }

  componentDidMount() {
    this.updateTop();
  }

  render() {
    const { welcome, subtitle } = this.state.top;
    return <View style={styles.top}>
      <Image style={styles.image} source={logo}></Image>
      <Text style={styles.welcome}>{welcome}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  }
});

export default Top;