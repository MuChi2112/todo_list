import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import Background from '@/components/ui/Background';
import BlueBtn from '@/components/ui/blueBtn';
import RedBtn from '@/components/ui/redBtn';
import NoteText from '@/components/ui/noteText';
import Tab from '@/components/ui/Tab';

import picImage from '../../assets/images/pic.png';

export default function HomeScreen() {
  return (
    <Background >
      <Tab />
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={picImage} style={styles.image} />

          <NoteText>
            No items. Press 'Add' to add tasks.
          </NoteText>
        </View>

        <View style={styles.buttonRow}>
          <RedBtn></RedBtn>
          <BlueBtn>Edit</BlueBtn>
          <BlueBtn>Complete</BlueBtn>
        </View>

        <View style={styles.buttonContainer}>
          <BlueBtn>ADD</BlueBtn>
        </View>
      </View>

      
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    height: '80vh',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    paddingBottom: 24,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 80,
    marginBottom: '50px'
  },
});
