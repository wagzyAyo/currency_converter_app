import React from 'react'
import {Text, View, StyleSheet } from 'react-native';
import Data from '../data';

const Convert = () => {
    return(
        <View>
            <Data />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Convert