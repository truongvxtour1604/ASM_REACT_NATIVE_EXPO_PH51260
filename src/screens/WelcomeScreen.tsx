import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function WelcomeScreen({ navigation }: { navigation: any }) {
    useEffect(() => {
        if (navigation) {
            const timer = setTimeout(() => {
                navigation.replace("Login"); // Điều này sẽ chuyển đến màn hình LoginScreen
            }, 2000);

            return () => clearTimeout(timer);
        } else {
            console.error("Navigation object is undefined!");
        }
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require("../images/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
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
    logo: {
        width: '80%',
        height: '80%',
    },
});
