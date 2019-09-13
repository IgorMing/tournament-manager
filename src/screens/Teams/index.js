import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addTeam } from './duck';

const Teams = () => {
  const [team, setTeam] = useState('');
  const data = useSelector(state => state.team.data);
  const dispatch = useDispatch();

  function renderItem({ item }) {
    return <Text>{item}</Text>;
  }

  function add() {
    dispatch(addTeam(team));
    setTeam('');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: '80%',
          }}
          autoCorrect={false}
          onChangeText={setTeam}
          value={team}
        />
        <Button title="Add" onPress={add} />
        <FlatList
          keyExtractor={(_, index) => String(index)}
          data={data}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Teams;
