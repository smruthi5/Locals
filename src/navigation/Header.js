// import React, { Component } from 'react';
// import Notification from '../components/Notification';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { Ionicons } from '@expo/vector-icons';
// import Vendor from '../components/VendorProfile/Vendor';
// import ProductDetails from '../components/ProductDetails/ProductDetails';
// import Search from '../components/Search/Search';
// import Subscription from '../components/Subscription/Subscription';
// import Activity from '../components/Activity';



// const MainStack = createStackNavigator({
//     Profile: {
//       screen: Vendor ,
//       navigationOptions: {
//         headerTitle: 'Profile',
//         tabBarLabel: ' ',
//             tabBarIcon: () => (

//                 <Ionicons name='ios-person' size={30}></Ionicons>
//             )
//       },
//     },
//     Add: {
//       screen: ProductDetails,
//       navigationOptions: {
//         headerTitle: 'Add Products',
//         tabBarLabel: ' ',
//             tabBarIcon: () => (

//                 <Ionicons name='ios-add' size={30}></Ionicons>
//             )
//       },
//     },
//     Search: {
//         screen: Search,
//         navigationOptions: {
//           headerTitle: 'Search',
//           tabBarLabel: ' ',
//           tabBarIcon: () => (

//               <Ionicons name='ios-search' size={30}></Ionicons>
//           )
//         },
//       },
//       Activity: {
//         screen: Activity,
//         navigationOptions: {
//           headerTitle: 'Activity',
//           tabBarLabel: ' ',
//             tabBarIcon: () => (

//                 <Ionicons name='ios-heart' size={30}></Ionicons>
//             )
//         },
//       },
//       Subscription: {
//         screen: Subscription,
//         navigationOptions: {
//           headerTitle: 'Subscription',
//           tabBarLabel: ' ',
//             tabBarIcon: () => (

//                 <Ionicons name='ios-mail' size={30}></Ionicons>
//             )
//         },
//       },
//   });

// export default createAppContainer(MainStack);