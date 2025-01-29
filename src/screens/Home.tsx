import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }: { navigation: any }) {

    return (
        <View style={styles.mainView}>
            <Text>Home</Text>
            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
});
