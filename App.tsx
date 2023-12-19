/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Apps from './Componenets/Apps';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar translucent />
        <View style={{flex: 1}}>
          <Apps />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
