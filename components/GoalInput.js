import { useState } from "react"
import { StyleSheet, View, TextInput, Button} from "react-native"
export const GoalInput = ({ add }) => {

    const [inputText, setInputText] = useState('');
    function enteredText (text){
        setInputText(text)
      }
    function addHandler(){
        add(inputText);
        setInputText(' ');
    }
  return (
  
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} 
      placeholder='enter a goal'
      onChangeText={enteredText}
      value={inputText}
      />
      <Button 
      title='add goal'
      onPress={addHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
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
})
