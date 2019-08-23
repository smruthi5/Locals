import React, { Component } from 'react';
import { Text, View} from 'react-native';
import styles from '../styles';



export default class Buyer extends React.Component {
    render(){
        return(
            <View styles={styles.container}>
                <Text>Buyer Profile</Text>
            </View>
        );
    }
} 