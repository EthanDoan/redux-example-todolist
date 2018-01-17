/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
TaskItemComponent => show information of each task
*/
import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableOpacity,
    RefreshControl, TextInput
} from 'react-native';

export default class TaskItemComponent extends Component {

    constructor(props) {
        super(props)
        console.tron.log(props)
    }

    render() {
        const { taskId, onClickToggle } = this.props
        console.tron.log(onClickToggle)
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        onClickToggle(taskId)
                    }}
                    style={{
                        flex: 1
                    }}
                >
                    <Text style={{ margin: 20, color: this.props.completed == true ? 'darkgreen' : 'black' }}>
                        {this.props.taskName}
                    </Text>
                </TouchableOpacity>
            </View>);
    }
};