import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {containerStyle} from '../styles/contanierStyle';
import Task from '../components/Task';
import {keyboardStyle} from '../styles/keyboardStyle';
const Container = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    // Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={containerStyle.container}>
        <ScrollView style={containerStyle.tasksWrapper}>
          <Text style={containerStyle.sectionTitle}>Today's tasks</Text>
          <View style={containerStyle.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'android' ? 'padding' : 'height'}
          style={keyboardStyle.writeTaskWrapper}>
          <TextInput
            style={keyboardStyle.input}
            placeholder={'Write a text'}
            value={task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={keyboardStyle.addWrapper}>
              <Text style={keyboardStyle.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Container;
