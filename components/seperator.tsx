import { View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '@/constants/colors'

interface SeperatorProps {
    style?: ViewStyle;
}
const Seperator = ({style} : SeperatorProps) => {
  return (
    <View style={[style, {height:1, backgroundColor:colors.MID_GRAY, alignSelf:"center"}]}>
      
    </View>
  )
}

export default Seperator
