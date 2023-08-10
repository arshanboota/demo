import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import OneSignal from 'react-native-onesignal';
const App = () => {
const [notificationData, setNotificationData]= useState('');

useEffect(()=>{
  OneSignal.setAppId('858e0971-064e-452c-bd72-1fce2dceade5');
  
  
  OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
   setNotificationData(notification.body);
   console.log('data==========>',notification);
    notificationReceivedEvent.complete(notification);
  });
  
},[])

  return (
    <View>
      <Text style={{color:'black'}}>{notificationData}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})


// // import { View, Text } from 'react-native'
// // import React from 'react'

// // const App = () => {
// //   return (
// //     <View>
// //       <Text>App</Text>
// //     </View>
// //   )
// // }

// // export default App
// // // import React from 'react';
// // import { StyleSheet, Text, View } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import LoginScreen from './scr/FirebaseProject/LoginScreen';
// // import HomeScreen from './scr/FirebaseProject/HomeScreen';

// // const Stack = createNativeStackNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator>
// //         <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
// //         <Stack.Screen name="Home" component={HomeScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// import React from 'react';
// import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
// import Video from 'react-native-video';
// import LottieView from 'lottie-react-native';

// const windowWidth = Dimensions.get('window').width;

// const App = () => {
//   // Sample data for the FlatList
//   const videoData = [
//     { id: '1', source: require('./scr/Video/vid.mp4') },
//     { id: '2', source: require('./scr/Video/vid2.mp4') },
//     { id: '3', source: require('./scr/Video/vid2.mp4') },
//     { id: '4', source: require('./scr/Video/vid.mp4') },
//     // Add more video data as needed
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.videoContainer}>
//       <Video
//         source={item.source}
//         repeat={true}
//         paused={false}
//         controls={true}
//         resizeMode={'contain'}
//         style={styles.video}
//       />
//     </View>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <LottieView
//         style={styles.lottie}
//         source={require('./scr/Animation/Lottie.json')}
//         autoPlay
//         loop
//       />

//       <FlatList
//         data={videoData}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.flatListContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   lottie: {
//     height: '30%',
//     width: '100%',
//   },
//   flatListContainer: {
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//   },
//   videoContainer: {
//     width: windowWidth * 0.49,
//     aspectRatio: 9 / 9, // Adjust aspect ratio for a taller video
//     marginVertical: 10, // Increase margin for more spacing
//     marginRight: 15,
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default App;








// // import {  View,PermissionsAndroid,Platform } from 'react-native'
// // import React, {useState,useEffect} from 'react'
// // import Geolocation from '@react-native-community/geolocation';
// // import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

// // const App = () => {
// //   const [location,setLocation]= useState(0)
// //    Geolocation.getCurrentPosition((data)=>
// //    setLocation( data.coords)
// //    )
   

// // async function rNNGzdBrXymtBL9WHZTXsLZrhihHoq9C9H() {
// //   if (Platform.OS === 'ios') {
// //     Geolocation.requestAuthorization();
// //     return;
// //   }

// //   try {
// //     const granted = await PermissionsAndroid.request(
// //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
// //       {
// //         title: 'Location Permission',
// //         message: 'This app needs access to your location.',
// //         buttonNeutral: 'Ask Me Later',
// //         buttonNegative: 'Cancel',
// //         buttonPositive: 'OK',
// //       },
// //     );
// //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
// //       Geolocation.getCurrentPosition(
// //         position => {
// //           console.log(position.coords.latitude, position.coords.longitude);
// //         },
// //         error => {
// //           console.log(error);
// //         },
// //         {
// //           enableHighAccuracy: true,
// //           timeout: 20000,
// //           maximumAge: 1000,
// //         },
// //       );
// //     } else {
// //       console.log('Location permission denied');
// //     }
// //   } catch (err) {
// //     console.warn(err);
// //   }
// // }



// //   return (
// //     <View>
// //       <MapView
// //       provider={PROVIDER_GOOGLE}
// //       style={{width:'100%',height:'100%'}}
// //       region={{
// //         latitude: location.latitude,
// //     longitude: location.longitude,
// //     latitudeDelta: 0.012,
// //     longitudeDelta: 0.012,
// //       }}
      
// //       >
// //         <Marker coordinate={{  latitude: location.latitude,
// //     longitude: location.longitude }}
// //     title={"Current Location"}
// //     description={"Marker Description"}
// //     pinColor={"red"}
// //         />
// //       </MapView>
// //     </View>
// //   )
// // }

// // export default App;


// // import React from 'react';
// // import { View, Text, Button } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import Details from './WeatherApp/Details';
// // import HomeWeather from './WeatherApp/HomeWeather';
// // const Stack = createNativeStackNavigator();

// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName='Details'>
// //         <Stack.Screen  options={{headerShown: false}} name="HomeWeather" component={HomeWeather} />
// //       <Stack.Screen  options={{headerShown: false}} name="Details" component={Details} />
// //          {/*<Stack.Screen  options={{headerShown: false}}name="MyCart" component={MyCart} /> */}
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
  
// // };
// // export default App;

// // import React, { useState } from 'react';
// // import { View, StyleSheet } from 'react-native';
// // import MapView, { Marker } from 'react-native-maps';

// // const App = () => {
// //   const [region, setRegion] = useState({
// //     latitude: 37.78825,
// //     longitude: -122.4324,
// //     latitudeDelta: 0.0122,
// //     longitudeDelta: 0.0121,
// //   });

// //   return (
// //     <View style={{flex:1}}>
// //       <MapView
// //         style={{flex:1}}
// //         initialRegion={region}
// //       >
// //         <Marker
// //           coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
// //           title="Marker Title"
// //           description="Marker Description"
// //         />
// //       </MapView>
// //     </View>
// //   );
// // };
// // export default App;