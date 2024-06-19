import React from 'react'
import { ScrollView, View } from 'react-native'
import RetailerOnboarding from './InsightGraph/RetailerOnboarding'
import ProductUpload from './InsightGraph/ProductUpload'
import OrderReceive from './InsightGraph/OrderReceive'
import { screenBackground } from '../constants/Theme'

export default function Insights() {
  return (
    <View className="flex flex-col mb-12" style={{backgroundColor:screenBackground}}>
      <ScrollView>
        <View>
          <RetailerOnboarding />
        </View>
        <View>
          <ProductUpload />
        </View>
        <View>
          <OrderReceive />
        </View>
      </ScrollView>
    </View>
  )
}
