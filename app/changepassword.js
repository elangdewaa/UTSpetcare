import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';


const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    if (currentPassword && newPassword && confirmNewPassword) {
      if (newPassword === confirmNewPassword) {
        setTimeout(() => {
          Alert.alert('Password Changed', 'Password Anda berhasil diubah');
        }, 2000); // Simulasi penggantian password selama 2 detik
      } else {
        Alert.alert('Error', 'Konfirmasi password tidak cocok');
      }
    } else {
      Alert.alert('Error', 'Semua kolom harus diisi');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Masukkan password saat ini:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 }}
        onChangeText={text => setCurrentPassword(text)}
        value={currentPassword}
        secureTextEntry={true}
      />
      <Text>Masukkan password baru:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 }}
        onChangeText={text => setNewPassword(text)}
        value={newPassword}
        secureTextEntry={true}
      />
      <Text>Konfirmasi password baru:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 }}
        onChangeText={text => setConfirmNewPassword(text)}
        value={confirmNewPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleChangePassword} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
        <Text style={{ color: 'white' }}>Ganti Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;
