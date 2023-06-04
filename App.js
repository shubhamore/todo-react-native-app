import { StyleSheet, Text, View, StatusBar, Dimensions, ScrollView } from 'react-native';
import TaskDetail from './src/components/TaskDetail';
import ToDoSection from './src/components/ToDoSection';
//import store from "./src
import store from "./src/redux/store";
//import Provider
import { Provider } from "react-redux";

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView >
      <StatusBar style="auto" />
      <Provider store={store}>
        <View style={{paddingHorizontal:20,paddingVertical:20}}>
          <TaskDetail/>
          <ToDoSection/>
        </View>
      </Provider>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
