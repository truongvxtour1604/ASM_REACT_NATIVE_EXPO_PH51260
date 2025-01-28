import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }: { navigation: any }) {

    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                {/* Dòng text VXT */}
                <Text style={styles.txtVXT}>VXT</Text>
            </View>

            <View style={styles.bottomView}>
                <Entypo name="chevron-left" size={50} color="#fff" style={styles.iconStyle} onPress={() => navigation.navigate('Welcome')} />
                {/* Dòng text chào mừng quay trở lại */}
                <Text style={styles.txtWelcomeBack}>
                    Welcome{'\n'}
                    back
                </Text>
                <View style={styles.formView}>
                    {/* Ô nhập email */}
                    <TextInput placeholder={"Email address*"} placeholderTextColor={"#fff"} style={styles.textInput} />
                    {/* Ô nhập mật khẩu */}
                    <TextInput placeholder={"Password*"} placeholderTextColor={"#fff"} secureTextEntry={true} style={styles.textInput} />
                    {/* Nút đăng nhập */}
                    <TouchableOpacity style={styles.btnSignIn}>
                        <Text style={styles.txtSignIn}>Sign in</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnSignUp} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.txtSignUp}>Don't have an account? Sign up</Text>
                </TouchableOpacity>
            </View>
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
    iconStyle: {
        marginTop: 20,
        marginLeft: 10
    },
    txtVXT: {
        fontSize: 100
    },
    txtWelcomeBack: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20,
        fontFamily: 'Amoresa'
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
    btnSignIn: {
        width: '90%',
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtSignIn: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    btnSignUp: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20
    },
    txtSignUp: {
        color: 'gray',
    },
});
