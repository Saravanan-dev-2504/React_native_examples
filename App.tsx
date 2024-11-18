import React, { useState } from "react";


import { View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, ActivityIndicator, Modal, Button, Image } from 'react-native';


// const App = () => (
//   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//     <View style={{ width:200,height:200, backgroundColor: 'lightblue',borderRadius:20,alignItems:'center',justifyContent:'center',shadowColor: '#171717',
//     shadowOffset: {width: -2, height: 4},
//     shadowOpacity: 0.2,
//     shadowRadius: 3, }}>
//       {/* Other components go here */}
//         <Text>Sample Card view components</Text>
//     </View>
//   </View>
// );


// const App = () => (
//   <View style={{flex:0.5,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
//   <Text style={{ fontSize: 32, color: 'black' }}>
//     Hello, React Native!
//   </Text>
//   </View>
// );

// const App = () => (
//   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//   <Image
//     source={{ uri: 'https://www.pikpng.com/pngl/b/97-973734_instagram-clipart-picsart-png-instagram-logo-100x100-png.png' }}
//     style={{ width: 100, height: 100 }}
//   />
//   </View>
// );

// const App = () => (
//   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//   <TextInput
//     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//     placeholder="Enter password"
//   />
//   </View>
// );


// const App = () => (
//   <View style={{flex:1,paddingTop:40}}>
//   <ScrollView>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//       <Text>Scrollable content here</Text>
//   </ScrollView>
//   </View>
// );

// const data = [{ id:1,key: 'Item 1' }, { id:2,key: 'Item 2' }];
// const App = () => (
//   <View style={{flex:1,paddingTop:40}}>
//   <FlatList
//     data={data}
//     keyExtractor={(item) => item.id} 
//     renderItem={({ item }) => <Text>{item.key}</Text>}
//   />
//   </View>
//   );


// const App = () => (
//   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//   <TouchableOpacity onPress={() => alert('Button pressed!')} style={{padding:20,backgroundColor:'blue',borderRadius:5}}>
//     <Text>Press Me</Text>
//   </TouchableOpacity>
//   </View>

// );


// const App = () => (
//   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//   <ActivityIndicator size="large" color="#0000ff" />
//   </View>
// );


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{flex:1,backgroundColor:'yellow',justifyContent:'center',alignItems:'center'}}>
          <Text>Modal Content</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};


export default App;
