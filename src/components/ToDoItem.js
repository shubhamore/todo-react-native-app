import { StyleSheet, View, Text, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function ToDoItem(props) {
  // console.log("props recieved=",props)
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: '#D7D7D7' }}
        // onPress={(props.onDeleteItem.bind(this, props.id))}
        onPress={props.toggle}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
      <View style={{flexDirection:'row',alignItems:'center',paddingLeft:20}}>
        {props.completed?<FontAwesome size={30} color={'#7F56D9'} name='check-circle'/>:<Entypo size={25} color={'grey'} name='circle'/>}
        <Text style={styles.todoText}>{props.name}</Text>
      </View>
      </Pressable>
    </View>
  );
}

export default ToDoItem;

const styles = StyleSheet.create({
  todoItem: {
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: '#F9F9FB',
  },
  pressedItem: {
    opacity: 0.75,
  },
  todoText: {
    color:'#30374F',
    paddingVertical:25.5,
    paddingHorizontal:20.5,
    fontSize:16,
    fontWeight:500,
    lineHeight:24,
    // overflow:'auto'
  },
});