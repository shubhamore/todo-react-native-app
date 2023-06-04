import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function GoalInput(props) {
    const [text, setText] = useState('');

    function goalInputHandler(enteredText) {
        setText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(text);
        setText('');
    }

    return (
        <Modal visible={props.visible} transparent={true} animationType="slide">
            <View style={styles.inputContainer}>
                <Icon name='circle-with-cross' size={45} color={'red'} style={{ position: 'absolute', top: 20, left: 20 }} onPress={props.onCancel} />
                <TextInput
                    multiline={true}
                    style={styles.textInput}
                    placeholder="Your Task"
                    onChangeText={goalInputHandler}
                    value={text}
                />
                <View style={{ width: '100%', marginTop: 15 }}>
                    <Button title="Add Task" onPress={addGoalHandler} color={"#7F56D9"} />
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

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