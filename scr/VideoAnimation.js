import React from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import Video from 'react-native-video';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;
const videoHeight = windowWidth * 0.56; // 16:9 aspect ratio

const App = () => {
  // Sample data for the FlatList
  const videoData = [
    { id: '1', source: require('./scr/Video/vid.mp4') },
    { id: '2', source: require('./scr/Video/vid.mp4') },
    { id: '3', source: require('./scr/Video/vid2.mp4') },
    { id: '4', source: require('./scr/Video/vid2.mp4') },
    // Add more video data as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <Video
        source={item.source}
        repeat={true}
        paused={false}
        controls={true}
        resizeMode={'contain'}
        style={[styles.video, { height: videoHeight }]}
      />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <LottieView
        style={styles.lottie}
        source={require('./scr/Animation/Lottie.json')}
        autoPlay
        loop
      />

      <FlatList
        data={videoData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    height: '30%',
    width: '100%',
  },
  flatListContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  videoContainer: {
    width: windowWidth * 0.49,
  
    marginRight: 15,
  },
  video: {
    width: '100%',
  },
});

export default App;