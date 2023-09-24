import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='enter a goal'/>
        <Button title='add goal'/>
      </View>
      <View>
        <Text>list of goals </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding : 50
  },
  inputContainer:{
    flexDirection: 'row'
  },
  textInput:{
    borderWidth: '1',
    borderColor: 'blue',
    width: '80%',
    justifyContent: 'center',
    padding: 5,
    marginRight: 8
  }
});
