import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem } from "react-native-elements"

export default class SecondScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataCount: '',
            data: [],
            isLoading: true,
            page: 1,
            count: 1
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch(`https://swapi.co/api/people/?page=${this.state.page}`);
        const json = await response.json();
        this.setState({ dataCount: json.count })
        this.setState({ data: json.results })
        this.setState({ isLoading: false })
    }

    render() {
        return (
            this.state.isLoading
                ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <ActivityIndicator size='large' color='black' />
                </View>
                :
                <View style={styles.container}>
                    {/* <Text>This is Second Screen </Text>
                    <Text>TOTAL CHARACTERS : {this.state.dataCount}</Text> */}
                    <List>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(object, index) => index}
                            //renderItem={({ item }) => <Text>{item.name}, {item.height}cm, {item.mass}kg</Text>}
                            renderItem={({ item }) =>
                                <ListItem
                                    onPress={() =>
                                        this.props.navigation.navigate("ThirdScreen", {
                                            name: item.name,
                                            mass: item.mass,
                                            height: item.height,
                                            birth_year: item.birth_year,
                                            gender: item.gender,
                                        })
                                    }
                                    title={item.name}
                                    subtitle={`${item.height}cm ${item.mass}kg`} />}
                        />
                    </List>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //marginHorizontal: 10,
    }
});