import { StyleSheet, Text, View, Dimensions, Button, FlatList,Pressable } from 'react-native'
import React, { useState } from 'react'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import ToDoInput from './ToDoInput'
import ToDoItem from './ToDoItem';

const ToDoSection = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }
    function startAddGoalHandler() {
        setModalIsVisible(true);
    }
    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: (Date.now()+Math.random()).toString(), completed: false },
        ]);
        endAddGoalHandler();
    }
    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.subheading}>Task List</Text>
                <Icon name="delete" color='#ff0000' size={30} style={styles.icon} onPress={() => console.log("delete pressed")} />
            </View>

            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <ToDoItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler}
                                completed={itemData.item.completed}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />
            </View>

            <View style={styles.todoItem}>
                <Pressable
                    android_ripple={{ color: '#D7D7D7' }}
                    onPress={startAddGoalHandler}
                    style={({ pressed }) => pressed && styles.pressedItem}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                        <Feather name="plus" size={25} color={'#ABB6C8'}/>
                        <Text style={styles.todoText}>Add Task</Text>
                    </View>
                </Pressable>
            </View>

            <ToDoInput
                visible={modalIsVisible}
                onAddGoal={addGoalHandler}
                onCancel={endAddGoalHandler}
            />
        </View>
    )
}

export default ToDoSection

const styles = StyleSheet.create({
    subheading: {
        fontWeight: 500,
        fontSize: width / 26,
        lineHeight: 20,
        color: '#5D6B98',
        marginVertical: 20,
    },
    todoItem: {
        marginVertical: 8,
        borderRadius: 16,
        backgroundColor: '#F9F9FB',
      },
      pressedItem: {
        opacity: 0.75,
      },
      todoText: {
        color:'#ABB6C8',
        paddingVertical:25.5,
        paddingHorizontal:20.5,
        fontSize:16,
        fontWeight:500,
        lineHeight:24,
        // overflow:'auto'
      },
})