import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {taskStyle} from '../styles/taskStyle';
const Task = props => {
  return (
    <View style={taskStyle.item}>
      <View style={taskStyle.itemLeft}>
        <View style={taskStyle.square}></View>
        <Text style={taskStyle.itemText}>{props.text}</Text>
      </View>
      <View style={taskStyle.circular}></View>
    </View>
  );
};
export default Task;
