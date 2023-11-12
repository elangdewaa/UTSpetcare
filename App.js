import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Image,
//   Text,
//   TouchableOpacity,
// } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView backgroundColor="#FF7F50">
//       <View>
//         <Image
//           source={require("./assets/Dashboard (2).png")}
//         />
//       </View>
//       <View >
//         <View >
//           <Text>
//             Jagalah Hewan{'\n'}Peliharaanmu{' '}
//           </Text>
//         </View>

//         <TouchableOpacity
//           onPress={() => {
//             // handle onPress
//           }}>
          

//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }