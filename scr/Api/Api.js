import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
const URL ='https://jsonplaceholder.typicode.com/posts';


const Api = () => {
    const [data, setData]= useState('')
    useEffect(()=>{
        getData();
        dataproduct();
    },[])   
    const getData = async()=>{
        const responce = await fetch(URL)
        const json =  await responce.json();
        console.log(json)
        setData(json)
        // setData(json[0])
    }

    const dataproduct=()=>{
        fetch('https://fakestoreapi.com/products/`${}`')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
  return (
    <View>
        {/* <Text>{data.id}</Text> */}

    <FlatList
    numColumns={2}
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({item,index})=>{
 return(
    <View>
        <Text>{item.title}</Text>
    </View>
 )
    }}
    />
    </View>
  )
}

export default Api

const styles = StyleSheet.create({})