import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const FactHubLogo = require('../asserts/images/Facthub-Logo.png');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={FactHubLogo}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 222,
    height: 64,
  },
});