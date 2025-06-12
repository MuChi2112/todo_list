import { Image } from 'expo-image';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Background from '@/components/ui/Background';
import cardImage from '../../assets/images/Card.png';
import todoImage from '../../assets/images/todo.png';

export default function HomeScreen() {
  return (
    <Background style={{ flex: 1 }}> {/* 💡 確保填滿畫面 */}
      <View style={styles.container}>
        <View style={styles.centeredContainer}>
          <Image source={todoImage} style={styles.icon} />
          <Text style={styles.title}>TaskMaster</Text>
        </View>

        <Image source={cardImage} style={styles.circleImage} />
      </View>
    </Background>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // 💡 使用 flex 撐滿畫面
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 12,
  },
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'orange',
  },
});
