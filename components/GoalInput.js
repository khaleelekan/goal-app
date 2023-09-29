import { useState } from "react"
import { StyleSheet, View, TextInput, Button} from "react-native"
import { Modal } from "react-native";
export const GoalInput = ({ add , visible}) => {

    const [inputText, setInputText] = useState('');
    function enteredText (text){
        setInputText(text)
      }
    function addHandler(){
        add(inputText);
        setInputText(' ');
    }
  return (
<Modal visible={visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} 
      placeholder='enter a goal'
      onChangeText={enteredText}
      value={inputText}
      />
      <View style={styles.buttonContainer}>
      <Button 
      title='add goal'
      onPress={addHandler}/>
      <Button 
      title='cancel'
      onPress={addHandler}/>
      </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
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
      buttonContainer:{
        marginTop: 12,
        flexDirection: 'row'
      }
})
