import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';


//this is our home page
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Readr </Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color: 'blue'}}> My Profile</Link>
      <Link href="/stats" style={{color: 'blue'}}> My Stats</Link>
      <Link href="/book_club" style={{color: 'blue'}}> My Book Clubs</Link>
      <Link href="/create_club" style={{color: 'blue'}}> Create A Club</Link>
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