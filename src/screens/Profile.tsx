import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';

export default function Profile({ navigation }: { navigation: any }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: "https://via.placeholder.com/100" }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>Nguyễn Văn A</Text>
                <Text style={styles.email}>nguyenvana@example.com</Text>
            </View>
            <View style={styles.section}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Chỉnh sửa hồ sơ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOutline}>
                    <Text style={styles.buttonTextOutline}>Đơn hàng của tôi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOutline}>
                    <Text style={styles.buttonTextOutline}>Cài đặt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logout}>
                    <Text style={styles.logoutText}>Đăng xuất</Text>
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
        color: "#000",
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
