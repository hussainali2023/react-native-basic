import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Todo } from '../../types/types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onToggle(todo.id)}
      >
        <Icon
          name={todo.completed ? 'check-circle' : 'radio-button-unchecked'}
          size={24}
          color={todo.completed ? '#4CAF50' : '#ccc'}
        />
      </TouchableOpacity>

      <Text
        style={[
          styles.text,
          todo.completed && styles.completedText
        ]}
        numberOfLines={2}
      >
        {todo.text}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(todo.id)}
      >
        <Icon name="delete" size={24} color="#ff4444" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
  },
  checkbox: {
    marginRight: 12,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    padding: 4,
  },
});

export default TodoItem;
