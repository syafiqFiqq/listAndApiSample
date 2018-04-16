import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Card } from 'react-native-elements'

export default class ThirdScreen extends Component {
    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        title: "Detail"
    }

    render() {
        const params = this.props.navigation.state.params;
        return (
            <View>
                <Card containerStyle={{ padding: 0 }} >
                    <Text>NAME : {params.name} </Text>
                    <Text>WEIGHT : {params.mass} kg</Text>
                    <Text>HEIGHT : {params.height} cm</Text>
                    <Text>BIRTH YEAR : {params.birth_year} </Text>
                    <Text>GENDER : {params.gender} </Text>
                </Card>
            </View>
        );
    }
}
