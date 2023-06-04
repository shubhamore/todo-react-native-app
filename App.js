import { StyleSheet, Text, View, StatusBar, Dimensions, ScrollView } from 'react-native';
import TaskDetail from './src/components/TaskDetail';
import ToDoSection from './src/components/ToDoSection';
// const { width } = Dimensions.get('window')

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView >
      <StatusBar style="auto" />
      <View style={{paddingHorizontal:20,paddingVertical:20}}>
        <TaskDetail/>
        <ToDoSection/>
      </View>
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
