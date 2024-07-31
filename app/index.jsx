import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';


//this is our home page
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Readr</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color: 'blue'}}> My Profile</Link>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
         flex: 1,
         backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center',
       },
    });