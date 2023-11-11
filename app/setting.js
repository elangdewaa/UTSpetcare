// SettingScreen.js
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Switch } from 'react-native';
import { Divider, HStack, VStack } from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';

const SettingScreen = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const handleLanguagePress = () => {
        // Navigasi ke layar pemilihan bahasa
        this.props.navigation.navigate('LanguageSelection');
    };

    const onSelectLanguage = (language) => {
        setSelectedLanguage(language);
        console.log(`Bahasa terpilih: ${language}`);
    };

    return (
        <SafeAreaView>
            <VStack space="md" p={20} backgroundColor="lightyellow">
                <TouchableOpacity onPress={handleLanguagePress}>
                    <HStack alignItems="center">
                        <Ionicons size={20} name="language" />
                        <Text fontSize="lg" style={{ marginLeft: 12 }}>
                            Bahasa
                        </Text>
                        {selectedLanguage && (
                            <View>
                                <Text> yang Dipilih: {selectedLanguage}</Text>
                            </View>
                        )}
                    </HStack>
                </TouchableOpacity>
                <Divider my={0.2} />
                <HStack alignItems="center">
                    <Ionicons size={20} name="notifications" />
                    <Text style={{ marginLeft: 12 }}> Notifikasi</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </HStack>

                <Divider my={0.2} />
                <HStack alignItems="center">
                    <Ionicons size={20} name="alert-circle" />
                    <Text style={{ marginLeft: 12 }}> About Us</Text>
                </HStack>
                <Divider my={0.2} />
                <HStack alignItems="center">
                    <Ionicons size={20} name="log-out" />
                    <Text style={{ marginLeft: 12 }}> Log Out</Text>
                </HStack>


            </VStack>
        </SafeAreaView>
    );
};

export default SettingScreen;


// Setting.js
// import React, { useState } from 'react';
// import { SafeAreaView, View, Text, TouchableOpacity, Switch } from 'react-native';
// import { Divider, HStack, VStack } from '@gluestack-ui/themed';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import LanguageSelection from './LanguageSelection';

// const Setting = () => {
//     const [isEnabled, setIsEnabled] = useState(false);
//     const [selectedLanguage, setSelectedLanguage] = useState(null);

//     const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
//     const handleLanguagePress = () => {
//         console.log('Navigasi ke layar pemilihan bahasa');
//     };

//     const onSelectLanguage = (language) => {
//         setSelectedLanguage(language);

//         console.log(`Bahasa terpilih: ${language}`);
//     };

//     return (
//         <SafeAreaView>
//             <VStack space="md" p={20} backgroundColor="lightyellow">
//                 <TouchableOpacity onPress={handleLanguagePress}>
//                     <HStack alignItems="center">
//                         <Ionicons size={20} name="language" />
//                         <Text fontSize="lg" style={{ marginLeft: 12 }}>
//                             Bahasa
//                         </Text>
//                         {selectedLanguage && (
//                             <View>
//                                 <Text> yang Dipilih: {selectedLanguage}</Text>
//                             </View>
//                         )}
//                         {selectedLanguage === null && (
//                             <LanguageSelection selectedLanguage={selectedLanguage} onSelectLanguage={onSelectLanguage} />
//                         )}
//                     </HStack>
//                 </TouchableOpacity>
//                 <Divider my={0.2} />
//                 <HStack alignItems="center">
//                     <Ionicons size={20} name="notifications" />
//                     <Text style={{ marginLeft: 12 }}> Notifikasi</Text>
//                     <Switch
//                         trackColor={{ false: '#767577', true: '#81b0ff' }}
//                         thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//                         ios_backgroundColor="#3e3e3e"
//                         onValueChange={toggleSwitch}
//                         value={isEnabled}
//                     />
//                 </HStack>

//                 <Divider my={0.2} />
//                 <HStack alignItems="center">
//                     <Ionicons size={20} name="alert-circle" />
//                     <Text style={{ marginLeft: 12 }}> About Us</Text>
//                 </HStack>
//                 <Divider my={0.2} />
//                 <HStack alignItems="center">
//                     <Ionicons size={20} name="log-out" />
//                     <Text style={{ marginLeft: 12 }}> Log Out</Text>
//                 </HStack>


//             </VStack>
//         </SafeAreaView>
//     );
// };

// export default Setting;
