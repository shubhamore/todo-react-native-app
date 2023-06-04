import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

function ToDoInput(props) {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const onSubmitTask = () => {
        dispatch(
            addTask({
                task: text,
            })
        );
        setText("");
        props.close()
    };

    function todoInputHandler(enteredText) {
        setText(enteredText);
    }

    return (
        <Modal visible={props.visible} transparent={true} animationType="slide">
            <View style={styles.inputContainer}>
                <Icon name='circle-with-cross' size={45} color={'red'} style={{ position: 'absolute', top: 20, left: 20 }} onPress={props.close} />
                <TextInput
                    multiline={true}
                    style={styles.textInput}
                    placeholder="Your Task"
                    onChangeText={todoInputHandler}
                    value={text}
                />
                <View style={{ width: '100%', marginTop: 15 }}>
                    <Button title="Add Task" onPress={onSubmitTask} color={"#7F56D9"} />
                </View>
            </View>
        </Modal>
    );
}

export default ToDoInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'rgba(0,0,0,0.85)',
        flex: 1,
        paddingTop: '25%',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        fontWeight:'bold',
        fontSize:20
    },
});