import  React from 'react';
import { Text, View} from 'react-native';
import styles from '../styles';



export default class Home extends React.Component {
    render(){
        return(
            <View styles={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
} 