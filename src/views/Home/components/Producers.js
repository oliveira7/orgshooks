import React, { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import Producer from './Producer';
import useProducers from '../../../hooks/useProducers';

export default function Producers({ top: Top }) {
  const [title, list] = useProducers();
  
  const TopList = () => {
    return <>
      <Top />
      <Text style={styles.title}>{title}</Text>
    </>
  }

  return <FlatList
    data={list}
    renderItem={({ item }) => <Producer {...item}></Producer>}
    keyExtractor={({ name }) => name}
    ListHeaderComponent={TopList}
  ></FlatList>
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    color: '#464646'
  }
});
