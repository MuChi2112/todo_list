import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import Screen from './Screen';

import cardImage from '../../assets/images/Card.png';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import blueBtn from '@/components/ui/blueBtn';
import redBtn from '@/components/ui/redBtn';
import inputBox from '@/components/ui/inputBox';
import noteText from '@/components/ui/noteText';
import text from '@/components/ui/text';
import textForTextBox from '@/components/ui/textForTextBox';
import Background from '@/components/ui/Background';


export default function HomeScreen() {
  return (
    <Background><h1>hello world</h1>
    <img src='../../assets/images/Card.png' alt="Card" />
    </Background>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
