import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import ButtonTitle from '../components/ButtonTitle'
import Personajes from '../components/Personajes'

const ListsView = () => {

  const pj = Personajes()
  const [reflesh,setReflesh] = useState(false)
  const [searchQuery, setSearchQuery] = useState(pj.campeones);

  const onChangeSearch = (query) => {
    const array = pj.campeones.filter((elemento) =>{
      if(elemento.campeon.toLowerCase().includes(query.toLowerCase())){
        elemento.search = true
        return elemento
      }else{
        elemento.search = false
        return elemento
      }
    })
    setSearchQuery(array)
  }


  const renderItem = ({ item, index }) => {
    if(!item.hide && item.search){
      return <ButtonTitle title={`${index} / ${item.linea} => ${item.campeon}`} action={() => {pj.dispatchCampeones({type : "[Hide]", index, item}); setReflesh(!reflesh)}} type={"list"} />
    }
    return <></>
  }

  return (
    <View>
      <Searchbar
        placeholder="Busqueda de Campeones"
        onChangeText={onChangeSearch}
      />
      <FlatList data={searchQuery} renderItem={renderItem} />
    </View>
  )
}

export default ListsView