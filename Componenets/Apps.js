import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Apps = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal!"
            onChangeText={goalInputHandler}
          />
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <View key={goal} style={styles.goalItem}>
                  <Text style={styles.goalText}>{itemData}</Text>
                </View>
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};

export default Apps;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc', // Fix the property name here
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#5912cacc',
  },
  goalText: {
    color: 'white',
  },
});
