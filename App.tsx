import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Home from './Components/Home.tsx';
import FixedCard from './Components/FixedCard.tsx';
import ScrollableCard from './Components/ScrollableCard.tsx';
import BlogCard from './Components/BlogCard.tsx';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{
          backgroundColor: '#050404ff',
        }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={{ paddingHorizontal: 10, paddingVertical: 30 }}></View>
        <FixedCard />
        <ScrollableCard />
        <BlogCard />
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
