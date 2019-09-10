import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  TextLink,
  Heading,
  ThemeProvider,
  Icon
} from '@kiwicom/orbit-react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  }
});

export default function App(props) {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Heading>React Native for Web & Next.js {1_234_56}</Heading>

        <TextLink>A universal link</TextLink>

        <View>
          <Heading type="title2">Subheader</Heading>
        </View>

        <View>
          <Icon name="Airplane" />
        </View>
      </View>
    </ThemeProvider>
  );
}
