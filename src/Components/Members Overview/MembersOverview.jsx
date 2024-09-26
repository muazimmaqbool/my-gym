import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {styles} from "./StyleMembersOverView"
import { SegmentedButtons } from 'react-native-paper'

const MembersOverview = ({navigation}) => {
  const [currSegment, setcurrSegment] = useState();
  //console.log("currSegment", currSegment)

  return (
    <View style={styles.container}>
       <SegmentedButtons
        value={currSegment}
        onValueChange={setcurrSegment}
        buttons={[
          {
            value: 'allMembers',
            label: 'All',
          },
          {
            value: 'activeMembers',
            label: 'Active',
          },
          { value: 'inactiveMembers', label: 'InActive' },
        ]}
      />
      <ScrollView>
        <View>
          
        </View>
      </ScrollView>
    </View>
  )
}

export default MembersOverview