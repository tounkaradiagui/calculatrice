import {useState} from "react";
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from "./src/styles/Colors";
import Button from "./src/component/Button";
import MyKeyboard from "./src/component/MyKeyboard";

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
        <StatusBar style="auto" />
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={styles.contain}
        />
        <MyKeyboard
          // title='3' isGray onPress={() => {alert('Bonjour')} }
        />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contain:{
    marginBottom: 600,
  }
});
