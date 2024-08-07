import {StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

//this is the profile page
const Profile = () => {

  const [search, setSearch] = useState('');
  const handleSearch = (text) => {
    setSearch(text);
    console.log('Search:', text);
  }

  const userInitials = "MR";
  const currentRead = "The Great Gatsby";

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            value={search}
            onChangeText={handleSearch}
          />
        </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.circle}>
          <Text style={styles.initials}>{userInitials}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style ={styles.name}>Meghna Reddy</Text>
          <Text style ={styles.nameInfo}>Current Read: {currentRead}</Text>
          <Text style ={styles.bookClubs}>My Book Clubs</Text>
        </View>
      </View>
    </View>
  )
}

export default Profile

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
    marginTop: 30,
    width: '90%',
    padding: 7,
    paddingLeft: 25,
    borderRadius: 15,
    marginBottom: 10,
    marginLeft: 20,
    backgroundColor: '#EFE8DB',
  },

  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EFE8DB',
    marginLeft: 30,
    marginTop: 30
  },

  initials: {
    color: '#000000',
    fontSize: 36,
    fontWeight: 30,
    marginLeft: 25,
    marginTop: 25
  },

  name: {
    color: '#000000',
    fontSize: 24,
    marginLeft: 20,
    marginTop: 30,
  },

  nameInfo: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 5
  },

  bookClubs: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 5,
    padding: 3,
    paddingLeft: 20,
    marginLeft: 40,
    borderRadius: 10,
    borderWidth: 1,
    width: 140
  },

})