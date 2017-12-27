/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
    ScrollView
} from 'react-native';

import {StackNavigator, TabNavigator,DrawerNavigator} from 'react-navigation';
import App from '../../App'

export default class ChatPage extends Component<{}> {
    render() {
        return (
            <View>
                <Text>ChatPage</Text>
                <Button title="摸我啊" onPress={() => this.props.navigation.navigate('DrawerOpen')}  />

            </View>
        );
    }
}


