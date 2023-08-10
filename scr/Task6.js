import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
const Task6 = () => {
    const [contacts, setContacts] = useState([
      { name: 'Follow Oluwafisayomi.dev.', completed: false },
      { name: 'Learn Figma by 4pm.7.', completed: false },
      { name:  'Coding at 9am.', completed: false },
      { name: 'Watch Mr. Beast\'s Videos.', completed: false },
      
    ]);
  
    const [newName, setNewName] = useState('');
    const [renderedContacts, setRenderedContacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      renderContacts(contacts);
    }, [contacts]);
  
    const addContact = () => {
      const newContact = { name: newName, completed: false };
      const updatedContacts = [...contacts, newContact];
      setContacts(updatedContacts);
      setNewName('');
      renderContacts(updatedContacts);
    };
  
    const deleteContact = (index) => {
      const updatedContacts = [...contacts];
      updatedContacts.splice(index, 1);
      setContacts(updatedContacts);
      renderContacts(updatedContacts);
    };
  
    const handleTaskComplete = (index) => {
      const updatedContacts = [...contacts];
      updatedContacts[index].completed = !updatedContacts[index].completed;
      setContacts(updatedContacts);
      renderContacts(updatedContacts);
    };
  
    const handleSearch = (query) => {
      setSearchQuery(query);
      const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
      renderContacts(filteredContacts);
    };
  
    const renderContacts = (contacts) => {
      const renderedItems = contacts.map((item, index) => (
        <View key={index}>
          <View
            style={{
              backgroundColor: 'white',
              marginHorizontal: 10,
              marginVertical: 10,
              paddingVertical: 10,
              borderRadius: 5,
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
              onPress={() => handleTaskComplete(index)}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: item.completed ? 'gray' : 'black',
                  backgroundColor: item.completed ? 'gray' : 'transparent',
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {item.completed && (
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: 'gray',
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>
  
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                 }} >
                {item.name}
              </Text>
            </View>

            <View> 
              <TouchableOpacity onPress={() => deleteContact(index)}>
              <Image style={{right:-100,height:20,width:20,resizeMode:'contain'}} source={require('./assets/del.png')}/>
            </TouchableOpacity>
            </View>
           
          </View>
        </View>
      ));
      setRenderedContacts(renderedItems);
    };
  
    return (
      <ScrollView style={{ margin: 10 }}>
  
        <View>
  
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={{ fontSize: 16 }}> Dairy Tasks</Text>
            </View>
            <View style={{right:-150}}>
              <TouchableOpacity
                style={{
                  justifyContent: 'right',
                  backgroundColor: '#212F3C',
                  margin: 5,
                  borderRadius: 35,
                  borderWidth: 1,
                  height: 35,
                  width: 35,
                }}
                onPress={addContact}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    justifyContent:'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 25,
                  }} >
                  +
                </Text>
              </TouchableOpacity>
  
            </View>
          </View>
          <TextInput
            style={{ margin: 5, borderWidth: 1, borderRadius: 5 }}
            placeholder="Enter Your Task"
            onChangeText={(text) => setNewName(text)}
            value={newName}
          />
        </View>
  
        {renderedContacts}
      </ScrollView>
    );
  };
  
  export default Task6;