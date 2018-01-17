/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
AddComponent to show TextInput, "add" button, 
*/
import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';

export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: ''
        });
    }
    render() {
        return (
            <View style={styles.containerView}>
                <TextInput style={styles.textInput}
                    keyboardType='default'
                    placeholderTextColor='white'
                    placeholder='Enter task name'
                    autoCapitalize='none'
                    value={this.state.newTaskName}
                    onChangeText={
                        (text) => {
                            this.setState({ newTaskName: text });
                        }
                    }
                />
                <TouchableHighlight
                    style={styles.addButtonContainer}
                    underlayColor='blue'
                    onPress={(event) => {
                        if (!this.state.newTaskName.trim()) {
                            return;
                        }
                        //Call click event => use "Container"
                        this.props.onClickAdd(this.state.newTaskName);
                        this.setState({ newTaskName: '' })
                    }}
                >
                    <Image
                        style={styles.iconAdd}
                        source={require('../icons/icon_add.png')}
                    />
                </TouchableHighlight>
            </View>);
    }
}

const styles = StyleSheet.create({
    containerView: {
        backgroundColor: 'tomato',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 64
    },
    textInput: {
        height: 40,
        width: 200,
        margin: 10,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        color: 'white'
    },
    addButtonContainer: {
        marginRight: 10
    },
    iconAdd: {
        width: 35,
        height: 35
    }
})