import React, {Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from '../styles';
import {createStacknavigator, createAppContainer } from 'react-navigation';




export default class Login extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Button title='Login' onPress={()=> this.props.navigation.navigate('Profile')}></Button>
            </View>
        );
    }
}


