/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';

import ToDoList from './ToDoList'; // import ToDoList component
import ToDoForm from './ToDoForm'; // import ToDoForm component

function App() {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // add task to tasks array
  const addTask = (task) => { 
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ToDoList tasks={tasks} />
      </ScrollView>
      <View style={styles.form}>
        <ToDoForm addTask={addTask} tasks={tasks}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
});

export default App;
