// // LanguageSelectionScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LanguageSelection = ({ navigation }) => {
  const languages = ['Bahasa', 'English', 'Spanish', 'French'];

  const onSelectLanguage = (language) => {
    // Kembalikan ke layar sebelumnya (SettingScreen) dengan mengirim bahasa yang dipilih
    navigation.navigate('Setting', { selectedLanguage: language });
  };

  return (
    <View>
      <Text>Pilih Bahasa:</Text>
      {languages.map((language) => (
        <TouchableOpacity key={language} onPress={() => onSelectLanguage(language)}>
          <Text>{language}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LanguageSelection;

// LanguageSelection.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const LanguageSelection = ({ selectedLanguage, onSelectLanguage }) => {
//   const languages = ['Bahasa', 'English', 'Spanish', 'French']; // Ganti dengan daftar bahasa yang diinginkan

//   return (
//     <View>
//       <Text>Pilih Bahasa:</Text>
//       {languages.map((language) => (
//         <TouchableOpacity key={language} onPress={() => onSelectLanguage(language)}>
//           <Text>{language}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// export default LanguageSelection;
