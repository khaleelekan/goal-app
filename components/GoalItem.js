import { StyleSheet,View,Text, Pressable } from "react-native"
export const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.Textid)}>
    <View style={styles.goalItem}>
    <Text  style={styles.goalText}>{props.items.item.text}</Text>
     </View>
     </Pressable>
  )
}

const styles = StyleSheet.create({
    goalItem:{
        margin: 25,
        borderWidth: 1,
        padding: 18,
        backgroundColor: 'blue',
        borderRadius: 15
      },
      goalText:{
        color: 'white'
      }
})
