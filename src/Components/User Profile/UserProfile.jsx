import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {styles} from "./StyleUserProfile"

const UserProfile = ({route}) => {
    const {user}=route.params;
    //console.log("user recived:",user)
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default UserProfile
