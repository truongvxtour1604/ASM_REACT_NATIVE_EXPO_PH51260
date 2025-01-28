import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen({ navigation }: { navigation: any }) {
    useEffect(() => {
        if (navigation) {
            const timer = setTimeout(() => {
                // Chuyển đến màn hình sign in sau 2s
                navigation.replace("SignIn");
            }, 2000);

            return () => clearTimeout(timer);
        } else {
            console.error("Lỗi!");
        }
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* Dòng text VXT */}
            <Text style={styles.txtVXT}>VXT</Text>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtVXT: {
        fontSize: 100,
        color: '#fff'
    },
});
