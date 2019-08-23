import React from 'react';
import { Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer , createStackNavigator} from 'react-navigation';
import Home from '../components/Home/Home';
import Vendor from '../components/VendorProfile/Vendor';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Search from '../components/Search/Search';
import Subscription from '../components/Subscription/Subscription';
import Activity from '../components/Activity';
import { Ionicons} from '@expo/vector-icons';





const ProfileStack = createStackNavigator({
    Profile: Vendor,
},
{
    defaultNavigationOptions:{
        headerTitle: 'Profile'
    }
});
const AddStack = createStackNavigator({
    Add: ProductDetails,
},
{
    defaultNavigationOptions:{
        headerTitle: 'Add Product'
    }
});
const SearchStack = createStackNavigator({
    Search: Search,
},
{
    defaultNavigationOptions:{
        headerTitle: 'Search'
    }
});
const ActivityStack = createStackNavigator({
    Activity: Activity,
},
{
    defaultNavigationOptions:{
        headerTitle: 'Activity'
    }
});
const SubStack = createStackNavigator({
    Sub: Subscription,
},
{
    defaultNavigationOptions:{
        headerTitle: 'Subscription'
    }
});


const TabNavigator= createBottomTabNavigator({
    Profile: {
        screen:ProfileStack,
        navigationOptions: {
                    tabBarLabel: ' ',
                    tabBarIcon: () => (
        
                        <Ionicons name='ios-person' size={30}></Ionicons>
                    )
                },
            },
    Add:{
        screen:AddStack,
        navigationOptions: {
                    tabBarLabel: ' ',
                    tabBarIcon: () => (
        
                        <Ionicons name='ios-add' size={30}></Ionicons>
                    )
                },
            },
    Search: {
        screen:SearchStack,
        navigationOptions: {
                    tabBarLabel: ' ',
                    tabBarIcon: () => (
        
                        <Ionicons name='ios-search' size={30}></Ionicons>
                    )
                },
            },
    Activity:{
        screen:ActivityStack,
        navigationOptions: {
                    tabBarLabel: ' ',
                    tabBarIcon: () => (
        
                        <Ionicons name='ios-heart' size={30}></Ionicons>
                    )
                },
            },
    Sub: {
        screen:SubStack,
        navigationOptions: {
                    tabBarLabel: ' ',
                    tabBarIcon: () => (
        
                        <Ionicons name='ios-mail' size={30}></Ionicons>
                    )
                },
            },

});

export default createAppContainer(TabNavigator);