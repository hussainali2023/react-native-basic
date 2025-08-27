import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Index = () => {

  const [enteredText, setEnteredText] = useState("")
  const [courseGoals, setCourseGoals] = useState<string[]>([])

  function goalInputHandler(eText: string) {
    setEnteredText(eText)
  }

  function addGoalHandle() {
    setCourseGoals([...courseGoals, enteredText])

  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your First goal'
          onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandle} title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, i) => <Text key={i}>{goal}</Text>)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    // flex: 1, // Takes full available height
    // justifyContent: "center", // Centers vertically
    // alignItems: "center", // Centers horizontally
    // padding: 20,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%', // Takes full width of parent
    marginBottom: 20,
    alignItems: 'center', // Aligns items vertically in the row
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#092dfbff",
    width: "70%", // Adjusted to work better with button
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  goalsContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default Index;
