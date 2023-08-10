
//  import { View, Text } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Splash from './scr/Flatlist.js/Splash';
// import Scrl from '../Navigation/scr/Flatlist.js/Scrl';
// import First from './scr/Flatlist.js/First';

// const Stack = createNativeStackNavigator();
// const App = () => {
//   const [hasStoredEmail, setHasStoredEmail] = useState(false);

//   useEffect(() => {
//     checkStoredEmail();
//   }, []);

//   const checkStoredEmail = async () => {
  
//       const storedEmail = await AsyncStorage.getItem('Email');
//       if (storedEmail=='') {
//         setHasStoredEmail(true);
//       }
    
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName={hasStoredEmail ?'Splash' :'First'  }>
//       <Stack.Screen options={{ headerShown: false }} name="Scrl" component={Scrl} />
//       <Stack.Screen options={{ headerShown: false }} name="First" component={First} />
//       <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
      
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;