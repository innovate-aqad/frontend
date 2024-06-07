import React from 'react'
import { ScrollView, View } from 'react-native'
import RetailerOnboarding from './InsightGraph/RetailerOnboarding'
import Header from './Header'
import ProductUpload from './InsightGraph/ProductUpload'
import OrderReceive from './InsightGraph/OrderReceive'

export default function Insights() {
  return (
    <View className="flex flex-col mb-32">
      <Header></Header>
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
