import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Button} from 'react-native';
import { useState } from 'react';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';


export default function App() {
  const [Modal, setModal] = useState(false)
  const [updateGoal,setUpdateGoal] = useState([]);
 
  function newGoal(){
    setModal(true)
  }
  function endNewGoal (){
    setModal(false)
  }
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
      <Button 
      title='add new goal' 
      color="blue"
      onPress={newGoal}/>
      <GoalInput add={addGoal} visible={Modal} onCancel={endNewGoal}/>
      <View style={styles.goals}>
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
