import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default class FirstScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text> This is First Screen </Text>
                <Button title='Second Page' onPress={() => this.props.navigation.navigate('SecondScreen')}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})