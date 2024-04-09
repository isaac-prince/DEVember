import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DayListItem from './src/components/core/DayListitem';

const days = [... Array(24)].map((val, index)=>index+1);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
      numColumns={2}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.column}
      data={days}
      renderItem={({item})=><DayListItem day={item}/>}
      />
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content:{
    gap: 10,
    padding:10,
  },
  column:{
    gap:10,
  },
});
