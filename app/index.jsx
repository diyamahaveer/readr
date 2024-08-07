import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';


//this is our home page
export default function App() {

  const [search, setSearch] = useState('');

  const handleSearch = (text) => {
    setSearch(text);
    //search functionality implemented here
    console.log('Search:', text);
  }

  return (
    //this is the big screen
    <View style={styles.container}>
        {/*this is the search container */}
        <View style={styles.searchContainer}>
          {/*this is the style for the search container */}
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            value={search}
            onChangeText={handleSearch}
          />
        </View>
          {/*this is the intro text at the top */}
          <View style={styles.content}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}> Welcome to Readr </Text>
            <Text style={{fontSize: 18, fontWeight: 'light'}}> Pick up where you left off. </Text>
          </View>
          {/*this is the scrolls, there is the book clubs and the stats boxes */}
          <View style={styles.greenSquare}>
            <View style={styles.clubText}>
              <Text style={{fontSize: 20, fontWeight: 'light'}}> Book Clubs</Text>
            </View>
          </View>
          <View style={styles.links}>
          <View style={styles.greenSquareTwo}>
            <View style={styles.statsText}>
              <Text style={{fontSize: 20, fontWeight: 'light'}}> Leaderboard</Text>
            </View>
          </View>
          {/*these are the links for all the different pages */}
            <StatusBar style="auto" />
            <Link href="/profile" style={{color: 'blue'}}> My Profile</Link>
            <Link href="/stats" style={{color: 'blue'}}> My Stats</Link>
            <Link href="/book_club" style={{color: 'blue'}}> My Book Clubs</Link>
            <Link href="/create_club" style={{color: 'blue'}}> Create A Club</Link>
          </View>
      </View>
  );
}

/*this is the styling for all the containers */
/*might not be the most efficiently written cause im still figuring this out */
const styles = StyleSheet.create({
    container: {
         flex: 1,
         backgroundColor: '#FFF8E7'
    },
      
    searchContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    searchBar: {
      marginTop: 100,
      width: '90%',
      padding: 7,
      paddingLeft: 25,
      borderRadius: 15,
      marginBottom: 60,
      marginLeft: 20,
      backgroundColor: '#EFE8DB',
    },

    content: {
      flex: 1,
      alignItems: 'end',
      justifyContent: "center",
      marginLeft: 20,
    },

    links: {
      flex: 1,
      alignItems: 'center',
      justifyContent: "center",
      marginBottom: 200,
    },

    greenSquare: {
      width: '100%',
      height: 180,
      backgroundColor: '#8EB686',
      alignSelf: 'center',
      marginBottom: 150,
      marginTop: 50,
    },

    clubText: {
      alignItems: "end",
      marginLeft: 20,
      marginTop: 10,
      
    },

    greenSquareTwo: {
      width: '100%',
      height: 180,
      backgroundColor: '#8EB686',
      alignSelf: 'center',
      marginBottom: 50,
      marginTop: 20,
    },

    statsText: {
      alignItems: "end",
      marginLeft: 20,
      marginTop: 10,
      
    },
    
  });