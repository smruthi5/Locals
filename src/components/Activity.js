import React, { Component } from 'react';
import { Text, View} from 'react-native';
import styles from './styles';



export default class Activity extends React.Component {
    render(){
        return(
            <View styles={styles.container}>
                <Text>Activity</Text>
            </View>
        );
    }
} 