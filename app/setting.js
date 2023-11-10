import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native";
import { Divider, HStack, VStack } from '@gluestack-ui/themed';
import Ionicons from "@expo/vector-icons/Ionicons";
// import { Switch } from '../components';


const Setting = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView>
            <VStack space="md" p={20} backgroundColor="lightyellow">
                <HStack alignItems='center'>
                    <Ionicons size={20} name="language"></Ionicons>
                    <Text fontSize="lg" style={{ marginLeft: 12 }}> Bahasa</Text>
                </HStack >
                <Divider my={0.2} />
                <HStack alignItems='center'>
                    <Ionicons size={20} name="notifications"></Ionicons>
                    <Text style={{ marginLeft: 12 }} > Notifikasi</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                </HStack>

                <Divider my={0.2} />
                <HStack alignItems='center'>
                    <Ionicons size={20} name="alert-circle"></Ionicons>
                    <Text style={{ marginLeft: 12 }} > About Us</Text>
                </HStack>
                <Divider my={0.2} />
                <HStack alignItems='center'>
                    <Ionicons size={20} name="log-out"></Ionicons>
                    <Text style={{ marginLeft: 12 }} > Log Out</Text>
                </HStack>
            </VStack>
        </SafeAreaView >
    )
}

export default Setting