import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default function Details(props) {
  const [data, setData] = useState(null);
  const { name } = props.route.params || { name: 'Rahimyar Khan' };

  useEffect(() => {
    fetchWeatherData(name); // Fetch weather data for Rahimyar Khan by default
  }, []);

  const fetchWeatherData = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Lahore&appid=a7eddfe5b4c790307e14c0ed49adf2dc&units=metric`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  };

  const getWeekDaysData = () => {
    if (data) {
      const weekDaysData = {};
      data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        const weekDay = date.toLocaleString('en-US', { weekday: 'short' });
        const day = date.getDate();
        if (!weekDaysData[formattedDate]) {
          weekDaysData[formattedDate] = {
          
            formattedDate,
            details: [],
          };
        }
        weekDaysData[formattedDate].details.push(item);
      });
      return Object.values(weekDaysData);
    }
    return [];
  };
  
  

  const renderItem = ({ item }) => (
    <LinearGradient
      style={{borderRadius: 35,
        marginHorizontal: 10,
        padding: 10,
        height: 175.93,
        width: 68.28}}
      colors={['#67E0D3', '#55AAFE']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView >
        <Text style={styles.dayText}>{item.weekDay}</Text>
        
        <Text style={styles.dayText}>{item.formattedDate}</Text>
        <Image source={{ uri: `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png` }}
              style={{ width: 43, height: 43, borderColor: 'black', borderRadius: 1 }} />
         <Text style={{fontSize:16,fontWeight:'900'}}>{data.list[0].main.temp.toFixed(0)}°C</Text>     
      </ScrollView>
    </LinearGradient>
  );
  return (
    <View style={{ flex: 1, backgroundColor: '#E7FEFA', margin: 10 }}>
      
      {data ? (
        <View style={{ flex: 1 }}>
          
          <View
  style={{
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'center',
   
    marginVertical: 20,
    height: 220,
    borderRadius: 50,
    borderWidth: 10,
  }}>
  <View style={{ flexDirection: 'row' ,justifyContent:'space-evenly'}}>
    <Image
      source={{
        uri: `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`,
      }}
      style={{
        width: 193,
        height: 89,
        borderColor: 'black',
        borderRadius: 1,
      }}
    />
    <Text style={{ color: 'white', fontSize: 40 }}>
      {data.list[0].main.temp.toFixed(0)} °C
    </Text>
  </View>
  <Text style={{ color: 'white', fontSize: 25, marginTop: 15,textAlign:'left' }}>
    LuckNow
  </Text>
</View>



          <View style={{flex:1,marginVertical:15,padding:2,marginRight:20,borderWidth:1,backgroundColor:'white',borderColor:'#E7FEFA',borderRadius:15,height:3780,width:350}}>
            <Text style={{ color: 'black', fontSize: 23, left: 22, bottom: 10, marginVertical:15,fontWeight: '600' }}>Today</Text>
            <Image source={require('../scr/assets/V.png')} style={{ height: 35.43, width:35.27,bottom:20,left:30.32, }} />

      <Text style={{fontSize:16,color:'black',bottom:20,left:16}}>{data.list[0].wind.speed}km/h</Text>
      <Image source={require('../scr/assets/Cloud.png')} style={{ height: 35.43, width:37.27,bottom:80,left:140 }} />
      <Text style={{fontSize:16,color:'black',bottom:80,left:156}}>{data.list[0].wind.speed}%</Text>
      <Image source={require('../scr/assets/temp.png')} style={{ height: 35.43, width:35.27,bottom:135,left:270 }} />
      <Text style={{fontSize:16,color:'black',bottom:135,left:280}}>{data.list[0].main.temp}</Text>
      <Image source={require('../scr/assets/temp.png')} style={{ height: 35.43, width:35.27,bottom:120,left:270 }} />
      <Text style={{fontSize:16,color:'black',bottom:115,left:256}}>{data.city.sunset}</Text>
      <Image source={require('../scr/assets/sunrise.png')} style={{ height: 35.43, width:35.27,bottom:170,left:125 }} />
      <Text style={{fontSize:16,color:'black',bottom:170,left:130}}>{data.city.sunrise}</Text>
      <Image source={require('../scr/assets/sunset.png')} style={{ height: 35.43, width:35.27,bottom:230,left:25 }} />
      <Text style={{fontSize:16,color:'black',bottom:225,left:30}}>{data.list[0].main.temp}</Text>
          </View>

          <View style={{ flex: 1,paddingTop:'20' }}>
            <FlatList
              horizontal
              data={getWeekDaysData()}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          </View>
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 25 }}>Loading.....</Text>
        </View>
      )}
    </View>
  );
}

const deviceWidth = 0; // Add your device width here
const styles = StyleSheet.create({
  dayText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
});




// import React, { useEffect, useState } from 'react';
// import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// export default function Details(props) {
//   const [data, setData] = useState(null);
//   const { name } = props.route.params || { name: 'Rahimyar Khan' };

//   useEffect(() => {
//     fetchWeatherData(name); // Fetch weather data for Rahimyar Khan by default
//   }, []);

//   const fetchWeatherData = (cityName) => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=Lahore&appid=a7eddfe5b4c790307e14c0ed49adf2dc&units=metric`,
//     )
//       .then(res => res.json())
//       .then(res => setData(res))
//       .catch(err => console.log(err));
//   };

//   const getWeekDaysData = () => {
//     if (data) {
//       const weekDaysData = {};
//       data.list.forEach(item => {
//         const date = new Date(item.dt * 1000);
//         const options = { month: 'short', day: 'numeric' };
//         const formattedDate = date.toLocaleDateString('en-US', options);
//         const weekDay = date.toLocaleString('en-US', { weekday: 'short' });
//         const day = date.getDate();
//         if (!weekDaysData[day]) {
//           weekDaysData[day] = {
//             weekDay,
//             details: [],
//           };
//         }
//         weekDaysData[day].details.push(item);
//       });
//       return Object.values(weekDaysData);
//     }
//     return [];
//   };

//   const renderItem = ({ item }) => (
//     <ScrollView style={{ 
//       backgroundColor: '#55AAFE', 
//       borderColor: 'black',
//       borderRadius: 25, 
//       padding: 18, 
//       marginBottom: 40,
//       marginHorizontal: 10,
//       height: 255.93,
//       width: 78.28,
//     }}>
//       <Text style={styles.dayText}>{item.weekDay}</Text>
//       <Text style={styles.dayText}>Temperature: {data.list[0].main.temp}</Text>
//       <Text style={styles.dayText}>{item.formattedDate}</Text>
//     </ScrollView>
//   );

//   return (
//     <View style={{ flex: 1, backgroundColor: '#E7FEFA ', margin: 20 }}>
//       <View style={{ position: 'absolute', paddingVertical: 5, paddingHorizontal: 10 }}>
//         <View style={{ alignItems: 'flex-end', width: deviceWidth - 20 }}>
//           <TouchableOpacity onPress={() => props.navigation.navigate('HomeWeather')}>
//             <Icon name="search" size={30} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>
      
//       {data ? (
//         <View style={{ flex: 1 }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               backgroundColor: 'black',
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 2,
//               width: deviceWidth - 40,
//               height: 220,
//               borderRadius: 50,
//               borderWidth: 10,
//             }}>
//             <Image
//               source={{ uri: `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png` }}
//               style={{ width: 200, height: 100, borderColor: 'black', borderRadius: 1 }}
//             />
//             <Text style={{ color: 'white', fontSize: 40 }}> {data.list[0].main.temp} °C</Text>
//           </View>
          
    //       <View>
    //         <Text style={{ color: 'black', fontSize: 23, left: 22, bottom: 10, fontWeight: '600' }}>Today</Text>
    //         <Image source={require('../scr/assets/V.png')} style={{ height: 22.43, width:24.27,bottom:30,left:340.32, }} />
    //  <Image source={require('../scr/assets/Haza.png')} style={{ height: 55.43, width:55.27,bottom:25,left:20 }} />
    //   <Text style={{fontSize:16,color:'black',bottom:20,left:16}}>{data.list[0].wind.speed}km/h</Text>
    //   <Image source={require('../scr/assets/Cloud.png')} style={{ height: 55.43, width:67.27,bottom:100,left:140 }} />
    //   <Text style={{fontSize:16,color:'black',bottom:100,left:156}}>{data.list[0].wind.speed}%</Text>
    //   <Image source={require('../scr/assets/temp.png')} style={{ height: 55.43, width:55.27,bottom:175,left:270 }} />
    //   <Text style={{fontSize:16,color:'black',bottom:175,left:280}}>{data.list[0].main.temp}</Text>
    //   <Image source={require('../scr/assets/sunset.png')} style={{ height: 55.43, width:85.27,bottom:165,left:255 }} />
    //   <Text style={{fontSize:16,color:'black',bottom:165,left:256}}>{data.city.sunset}</Text>
    //   <Image source={require('../scr/assets/sunrise.png')} style={{ height: 55.43, width:85.27,bottom:240,left:125 }} />
    //   <Text style={{fontSize:16,color:'black',bottom:245,left:120}}>{data.city.sunrise}</Text>
    //   <Image source={require('../scr/assets/temp.png')} style={{ height: 55.43, width:55.27,bottom:315,left:10 }} />
    //       </View>

//           <View style={{ flex: 1 }}>
//             <FlatList
//               horizontal
//               data={getWeekDaysData()}
//               keyExtractor={(item, index) => index.toString()}
//               renderItem={renderItem}
//               contentContainerStyle={{ paddingBottom: 20 }}
//             />
//           </View>
//         </View>
//       ) : (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text style={{ fontSize: 25 }}>Loading.....</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const deviceWidth = 0; // Add your device width here
// const styles = StyleSheet.create({
//   dayText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });
