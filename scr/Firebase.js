import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
const App = () => {
useEffect(()=>{
  getData();
},[])
 const [data, setData]= useState('')
 const [value, setValue]= useState('')
  const getData = async ()=>{
    const users = await firestore().collection('User').doc('User1').set();
    setData(users.data())
    console.log(data)
  }

  const postData = ()=>{
    firestore().collection('User').doc('Second').delete().then(console.log("Deleted Uploaded"))
  }
  return (
    <View>
      <Text>{data.name}</Text>
<TextInput
value={value}
onChangeText={(value)=>{setValue(value)}}
/>
      <Button title='Add Data' onPress={postData}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})



