import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
const URL = 'https://jsonplaceholder.typicode.com/posts';

const PractiseApi = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const responce = await fetch(URL)
        const json = await responce.json();
        setData(json)
    }

    return (
        <View>
            <FlatList

                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <Text style={{ fontSize: 15, color: 'blue' }}>{item.id}</Text>
                            <Text >{item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}
export default PractiseApi

const styles = StyleSheet.create({})