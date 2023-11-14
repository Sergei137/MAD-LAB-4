import React from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

function ToDoForm({ addTask, tasks }) {
  const [taskText, setTaskText] = React.useState(''); // set initial state to empty string
  
  const handleSubmit = () => {
    if (taskText && !tasks.includes(taskText)) {
      addTask(taskText);
      setTaskText('');
    } else if (tasks.includes(taskText)) {
      Alert.alert('Task already exists');
    }
  };

  return (
    <>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Add a new task..." 
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add Task" onPress={handleSubmit} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
