import { StyleSheet,View,Text, Pressable } from "react-native"
export const GoalItem = ({onDelete,items}) => {
  return (
    <Pressable onPress={onDelete}>
    <View style={styles.goalItem}>
    <Text  style={styles.goalText}>{items.item.text}</Text>
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
