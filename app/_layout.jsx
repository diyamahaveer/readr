import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
//slot allows you to render different screens

//this is a page that is routed to
//use rnfes to get the templates (es7+ installed)
const RootLayout = () => {
  return(
    <Stack>
      <Stack.Screen name ="index" options={{ headerShown: false}}/>
    </Stack>
  ) 
}

export default RootLayout