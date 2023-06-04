import { StyleSheet, Text, View, Dimensions, Button, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import ToDoInput from './ToDoInput'
import ToDoItem from './ToDoItem';
import { useSelector } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { toggleTask } from "../redux/taskSlice";
import { useDispatch } from "react-redux";

const ToDoSection = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.tasks);

    const [modalIsVisible, setModalIsVisible] = useState(false);

    const onDelete = () => {
        dispatch(
            deleteTask({})
        );
    };

    const onToggle = (id, comp) => {
        dispatch(
            toggleTask({
                id: id,
                comp: comp
            })
        )
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.subheading}>Task List</Text>
                <Icon name="delete" color='#ff0000' size={30} style={styles.icon} onPress={onDelete} />
            </View>

            <View style={styles.goalsContainer}>
                {todos.map(itemData => {
                    return (
                        <ToDoItem
                            name={itemData.name}
                            id={itemData.id}
                            key={itemData.id}
                            toggle={() => onToggle(itemData.id, itemData.completed)}
                            completed={itemData.completed}
                        />
                    );
                })}
            </View>

            <View style={styles.todoItem}>
                <Pressable
                    android_ripple={{ color: '#D7D7D7' }}
                    onPress={() => setModalIsVisible(true)}
                    style={({ pressed }) => pressed && styles.pressedItem}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                        <Feather name="plus" size={25} color={'#ABB6C8'} />
                        <Text style={styles.todoText}>Add Task</Text>
                    </View>
                </Pressable>
            </View>

            <ToDoInput
                visible={modalIsVisible}
                close={() => setModalIsVisible(false)}
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
        color: '#ABB6C8',
        paddingVertical: 25.5,
        paddingHorizontal: 20.5,
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 24,
        // overflow:'auto'
    },
})