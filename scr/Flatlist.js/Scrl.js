import { View, Text, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';

const Scrl = ({navigation}) => {
  const [contacts, setContacts] = useState([
    { name: require('../assets/1.png') },
    { name: require('../assets/handsome.png') },
    { name: require('../assets/man.png') },
    { name: require('../assets/handsome.png') },
    { name: require('../assets/handsome.png') },
  ]);
  const [contacts1, setContacts1] = useState([
    { name: require('../assets/i.png') },
    { name: require('../assets/handsome.png') },
    { name: require('../assets/man.png') },
    { name: require('../assets/handsome.png') },
    { name: require('../assets/handsome.png') },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  const hideImageModal = () => {
    setShowImageModal(false);
    setSelectedImage(null);
  };

  const renderContacts = ({ item }) => (
    <TouchableOpacity onPress={() => handleImageClick(item.name)}>
      <View>
        <Image source={item.name} style={{ width: 120, height: 120, marginRight: 10 }}  />
      </View>
    </TouchableOpacity>
  );

  const renderContacts1 = ({ item }) => (
    <TouchableOpacity onPress={() => handleImageClick(item.name)}>
      <View>
        <Image source={item.name} style={{ width: 450, height: 400, marginRight: 10 }}  />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View>
        <FlatList horizontal data={contacts} renderItem={renderContacts} keyExtractor={(item, index) => index.toString()} />
      </View>

      <View>
        <FlatList data={contacts1} renderItem={renderContacts1} keyExtractor={(item, index) => index.toString()} />
      </View>

      
        <Modal visible={showImageModal} transparent animationType="fade">
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }} onPress={hideImageModal}>
            <View style={{ backgroundColor: 'black', padding: 20 }}>
              <Image source={selectedImage} style={{ width: '100%', height: 300 }}  />
              <Text style={{ marginTop: 10,color:'white' }}>
                What is an image called? Today, most people consider an image, picture, and photograph (photo) as synonyms (the same word) when talking about a visual representation of an object on a computer.
              </Text>
            </View>
          </TouchableOpacity>
        </Modal>
      
    </View>
  );
};

export default Scrl;
