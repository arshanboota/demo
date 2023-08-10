import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

const DesignFistPage = () => {
  const [backgroundColor, setBackgroundColor] = useState('gray');
  const [contacts, setContacts] = useState([
    { name: require('./scr/assets/b.png'), description: 'msdajdhgywu vss', price:'Rs 12000'},
    { name: require('./scr/assets/c.png'), description: 'hy this is second' ,price:'Rs 12000'},
    { name: require('./scr/assets/d.png'), description: 'hy this is Third',price:'Rs 12000'},
    { name: require('./scr/assets/e.png'), description: 'hy this is second',price:'Rs 12000'},
  ]);

  const handleTextClick = () => {
    // Change the background color when the text is clicked
    setBackgroundColor('#F38181'); // Replace '#ff0000' with your desired color
  };

  const renderContacts = ({ item }) => (
    <View style={{ alignItems: 'center' }}>
      <Image source={item.name} style={{ width: 160, height: 160, marginRight: 10 }} />
      <Text style={{ fontSize: 15, color: 'black', marginTop: 5 }}>{item.description}</Text>
      <Text style={{ fontSize: 15, color: 'black', marginTop: 5 }}>{item.price}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FCF6F7', padding: 20 }}>
      <View style={{ flex: 0.3 }}>
        <Image style={{ position: 'absolute', right: 5, height: 50, width: 50 }} source={require('./scr/assets/a.png')} />
        <Image
          style={{ position: 'absolute', left: 5, height: 45, width: 45, paddingHorizontal: 20, marginVertical: 15 }}
          source={require('./scr/assets/apps.png')}
        />
      </View>

      <Text style={{ fontSize: 23, fontWeight: '600', paddingHorizontal: 15, marginVertical: 19,marginStart:40}}>Match Your Style</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor: backgroundColor,
              alignItems: 'center',
              justifyContent: 'center',
              height: 33,
              width: 126,
              paddingTop: 5,
              borderRadius: 15,
              paddingBottom: 5,
              marginVertical: 4,
            }}
            onPress={handleTextClick}
          >
            <Text style={{ fontSize: 10, color: 'white' }}>Trending now</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor: backgroundColor,
              alignItems: 'center',
              justifyContent: 'center',
              height: 33,
              width: 81,
              paddingTop: 5,
              borderRadius: 15,
              paddingBottom: 5,
              marginVertical: 4,
            }}
            onPress={handleTextClick}
          >
            <Text style={{ fontSize: 10, color: 'white' }}>All</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor: backgroundColor,
              alignItems: 'center',
              justifyContent: 'center',
              height: 33,
              width: 81,
              paddingTop: 5,
              borderRadius: 15,
              paddingBottom: 5,
              marginVertical: 4,
            }}
            onPress={handleTextClick}
          >
            <Text style={{ fontSize: 10, color: 'white' }}>New</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <FlatList
          numColumns={2}
          data={contacts}
          renderItem={renderContacts}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default DesignFistPage;
