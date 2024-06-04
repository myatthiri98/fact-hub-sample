import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const FactHubLogo = require('../asserts/images/Facthub-Logo.png');


const SplashScreen = () => {
  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Image
            source={FactHubLogo}
            resizeMode="contain"
            style={{width: 222, height: 64}}
          />
        </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})