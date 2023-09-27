import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,FlatList} from 'react-native';
import { useState } from 'react';
import { GoalItem } from './components/GoalItem';


export default function App() {
  const [inputText, setInputText] = useState('');
  const [updateGoal,setUpdateGoal] = useState([]);
  function enteredText (text){
    setInputText(text)
  }
  function addGoal (){
    setUpdateGoal((updateGoal) => [...updateGoal,
      { text:inputText , key:Math.random().toString}] )
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
        placeholder='enter a goal'
        onChangeText={enteredText}/>
        <Button 
        title='add goal'
        onPress={addGoal}/>
      </View>
      <View style={styles.goals}>
      <Text >list of goals </Text>
      <FlatList data={updateGoal} renderItem={(itemData) => {
        return(
          <GoalItem />
        )
      }}/>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 50,
    paddingLeft:10,
    paddingRight:10,
  },
  inputContainer:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccccc',
    marginBottom: 24
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    justifyContent: 'center',
    padding: 8,
    marginRight: 8,
    borderRadius: 8,
  },
  goals:{
    flex:5 
  }
})
