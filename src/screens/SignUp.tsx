import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }: { navigation: any }) {

    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                {/* Dòng text VXT */}
                <Text style={styles.txtVXT}>VXT</Text>
            </View>

            <ScrollView style={styles.bottomView}>
                {/* Nút quay lại trang đăng nhập */}
                <Entypo name="chevron-left" size={50} color="#fff" style={styles.iconStyle} onPress={() => navigation.navigate('SignIn')} />
                {/* Dòng text tạo tài khoản */}
                <Text style={styles.txtWelcomeBack}>
                    Create {'\n'}
                    account
                </Text>
                <View style={styles.formView}>
                    {/* Ô nhập tên */}
                    <TextInput placeholder={"Full name*"} placeholderTextColor={"#fff"} style={styles.textInput} />
                    {/* Ô nhập email */}
                    <TextInput placeholder={"Email address*"} placeholderTextColor={"#fff"} style={styles.textInput} />
                    {/* Ô nhập số điện thoại */}
                    <TextInput placeholder={"Mobile*"} placeholderTextColor={"#fff"} style={styles.textInput} />
                    {/* Ô nhập mật khẩu */}
                    <TextInput placeholder={"Password*"} placeholderTextColor={"#fff"} secureTextEntry={true} style={styles.textInput} />
                    {/* Ô nhập xác nhận mật khẩu */}
                    <TextInput placeholder={"Confirm password*"} placeholderTextColor={"#fff"} secureTextEntry={true} style={styles.textInput} />
                    {/* Nút đăng ký */}
                    <TouchableOpacity style={styles.btnSignUp}>
                        <Text style={styles.txtSignUp}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    topView: {
        width: '100%',
        height: '30%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        width: '100%',
        height: '70%',
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    txtVXT: {
        fontSize: 100,
    },
    txtWelcomeBack: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20,
        fontFamily: 'Amoresa'
    },
    iconStyle: {
        marginTop: 20,
        marginLeft: 10
    },
    formView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    textInput: {
        width: '90%',
        height: 52,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 5,
        marginTop: 20,
        color: '#fff'
    },
    btnSignUp: {
        width: '90%',
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    txtSignUp: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});
