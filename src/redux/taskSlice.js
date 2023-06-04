import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: (Date.now() + Math.random()).toString(),
                name: action.payload.task,
                completed: false
            };
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter((item) => false);
        },
        toggleTask: (state, action) => {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, completed: !action.payload.comp }
                }
                return item
            })
        }
    },
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;