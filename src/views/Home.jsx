import { FlatList, View } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'

const HomeView = ({ navigation }) => {
  const views = [
    { title: 'Listado', path: 'listado' },
  ]

  const renderItem = ({ item }) => <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)} type={"home"}/>

  return (
    <View>
      <FlatList data={views} renderItem={renderItem} />
    </View>
  )
}

export default HomeView