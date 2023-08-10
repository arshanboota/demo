import { View, Text, FlatList, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'


const First = ({navigation}) => {
    const [pic, setPic] = useState([
        { address: require('../assets/ii.png'), line: 'for the minimalists' },
        { address: require('../assets/iii.png'), line: 'hustle in style' },
        { address: require('../assets/i.png'), line: 'exclusive sports wear' }
    ])

    const [currentIndex, setCurrentIndex] = useState(0);




    return (
        <View style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
            <View style={{ height: "70%" }}>
                <FlatList

                    pagingEnabled
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(event) => {
                        const contentOffset = event.nativeEvent.contentOffset.x;
                        const viewSize = event.nativeEvent.layoutMeasurement.width;
                        const index = Math.floor(contentOffset / viewSize);
                        setCurrentIndex(index);
                    }}

                    data={pic}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ width: Dimensions.get('screen').width }} disabled>
                            <ImageBackground style={{ height: "90%" }} resizeMode="cover" source={item.address}>

                                <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: "100%" }}>
                                    {pic.map((item, index) => {
                                        return (
                                            <View style={{ width: 8, height: 8, borderRadius: 4, marginHorizontal: 5, backgroundColor: index === currentIndex ? '#ffffff' : '#a6a49d' }}>

                                            </View>
                                        )
                                    })}
                                </View>

                            </ImageBackground>
                            <Text style={{ textTransform: "capitalize", color: "#ececec", fontFamily: "Nunito Sans", fontSize: 23, fontWeight: "700", textAlign: 'center' }}>{item.line}</Text>
                        </TouchableOpacity>
                    )} />
            </View>

            <Text style={{ marginBottom: 10, fontFamily: "Nunito Sans", fontSize: 16, fontWeight: "400", color: "#ececec", textAlign: 'center', width: "80%" }}>Matching Simplicity and comfort for your daily basic needs</Text>

            <TouchableOpacity style={{ marginTop: 20, justifyContent: 'center', alignItems: "center", width: "80%", backgroundColor: "#ececec", padding: 10 }}
            onPress={()=>navigation.navigate('Scrl')}>
                <Text style={{ color: "black", textTransform: "uppercase" }}>register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: "center", justifyContent: 'center', width: "80%", borderWidth: 1, borderColor: "#ececec", padding: 10, marginTop: 10 }}
            onPress={()=>navigation.navigate('Scrl')}>
                <Text style={{ color: "#ececec" }}>LOG IN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default First