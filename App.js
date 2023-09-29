import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import { useState } from 'react';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';


export default function App() {
  
  const [updateGoal,setUpdateGoal] = useState([]);
 
  function addGoal (inputText){
    setUpdateGoal((updateGoal) => [...updateGoal,
      { text:inputText , id : Math.random().toString}] );
  }

  function deleteItem (id){
    setUpdateGoal(currentGoal=>{
      return  (
        currentGoal.filter((goal) => goal.id !== id)
    )})
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput add={addGoal}/>
      <View style={styles.goals}>
      <Text >list of goals </Text>
      <FlatList data={updateGoal} renderItem={(itemData) => {
        return(
          <GoalItem items = {itemData}
           onDelete={deleteItem}
           id={itemData.item.id}/>
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
  goals:{
    flex:5 
  }
})
