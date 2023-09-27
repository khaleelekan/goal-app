
export const GoalItem = () => {
  return (
    <View style={styles.goalItem}>
    <Text  style={styles.goalText}>{itemData.item.text}</Text>
     </View>
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
