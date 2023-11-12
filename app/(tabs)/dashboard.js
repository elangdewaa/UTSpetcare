import { ImageBackground, Text, View, Button } from 'react-native';
import React from 'react'
import { Link } from "expo-router";
import { ButtonText, ButtonIcon, AddIcon } from '@gluestack-ui/themed';


const Dashboard = () => {
  return (
    <ImageBackground
      source={require('../../assets/Dashboard.png')}
      style={{
        flex: 1,
        resizeMode: 'cover', // atau 'stretch' untuk mengisi seluruh area
      }} >
      {/* Konten Anda di sini */}
      <View style={{ flex: 3, marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', alignItems: 'center' }}>Jagalah Hewan{'\n'}Peliharaanmu!{' '}</Text>
        
        <Text style={{ color: 'black', fontSize: 15, alignItems: 'center'}}> Bersama Pet Care, hewan peliharaan anda{'\n'}terjaga dengan aman!{' '}</Text>
        <Link
          href={{
          pathname: "/login",
          }}
          >

            <Button
          title="login"
          color="#f194ff"
      
        /></Link>
        
      </View>
      
    </ImageBackground>

  )
}

export default Dashboard
