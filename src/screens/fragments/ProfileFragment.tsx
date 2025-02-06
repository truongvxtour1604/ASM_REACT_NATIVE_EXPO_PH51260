import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';

export default function ProfileFragment({ navigation }: { navigation: any }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../images/vxt.jpg')}
                    style={styles.avatar}
                />
                <Text style={styles.name}>Vũ Xuân Trường</Text>
                <Text style={styles.email}>truongvxph51260@gmail.com</Text>
            </View>
            <View style={styles.section}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOutline}>
                    <Text style={styles.buttonTextOutline}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOutline}>
                    <Text style={styles.buttonTextOutline}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
        marginTop: 30
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#000",
    },
    name: {
        color: "#000",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 10,
    },
    email: {
        color: "#888",
        fontSize: 16,
        marginTop: 5,
    },
    section: {
        marginTop: 20,
    },
    button: {
        backgroundColor: "#000",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonOutline: {
        borderWidth: 2,
        borderColor: "#000",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 10,
    },
    buttonTextOutline: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
    logout: {
        backgroundColor: "#E53935",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 10,
    },
    logoutText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
});
