import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/configs/i18n';
import {StatusBar} from 'react-native';
import color from './src/constants/color';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/routes/Navigator'
import { ThemeProvider } from './src/configs/ThemeContext';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <StatusBar
          animated={true}
          barStyle={'dark-content'}
          backgroundColor={color.white}
        />
        <Navigator/>
      </I18nextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
