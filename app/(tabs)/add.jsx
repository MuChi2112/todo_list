import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import Background from '@/components/ui/Background';
import NoteText from '@/components/ui/noteText';
import InputBox from '@/components/ui/inputBox';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import todoImage from '../../assets/images/todo.png';

export default function HomeScreen() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handleAddTask = async() => {
    const newTask = {
      title,
      description,
      deadline,
      createdAt: new Date().toISOString(),
    
  }

  try{
    const existingTasksJSON = await AsyncStorage.getItem('tasks');
    const existingTasks = existingTasksJSON?JSON.parse(existingTasksJSON) :[];

    const updatedTasks = [...existingTasks, newTask];

    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));

    console.log('Task added:', newTask);
  }catch (error){
    console.error('Error saving task:', error);
  }
};

  return (
    <Background style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.formWrapper}>

          {/* Logo + Title: 橫向置中 */}
          <View style={styles.titleRow}>
            <Image source={todoImage} style={styles.image} />
            <NoteText style={styles.taskmasterText}>TaskMaster</NoteText>
          </View>

          {/* Title */}
          <View style={styles.field} >
            <NoteText style={styles.label}>TITLE</NoteText>
            <InputBox placeholder="Enter task title" onChangeData = {setTitle} />
          </View>

          {/* Description */}
          <View style={styles.field}>
            <NoteText style={styles.label}>DESCRIPTION</NoteText>
            <InputBox
              placeholder="Enter task description"
              multiline
              numberOfLines={4}
              style={[styles.textarea, { height: 140, textAlignVertical: 'top' }]} onChangeData = {setDescription}/>
          </View>

          {/* Deadline */}
          <View style={styles.field}>
            <NoteText style={styles.label}>DEADLINE</NoteText>
            <InputBox placeholder="Enter deadline" onChangeData = {setDeadline}/>
          </View>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <View style={{ flex: 1 }}>
              <Button title="CANCEL" color="#f25c2a" onPress={handleCancel} />
            </View>
            <View style={{ width: 16 }} />
            <View style={{ flex: 1 }}>
              <Button title="ADD TASK" color="#4285f4" onPress={handleAddTask} />
            </View>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
  },
  formWrapper: {
    width: '100%',
    maxWidth: 400,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // 整組置中
    marginBottom: 24,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 8,
  },
  taskmasterText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  field: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  label: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
});
