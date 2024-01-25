import React, {useState} from "react";
import { TextInput, Text, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const Form = () => {
    return(
        <View>
            <TextInput style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
    }
})

export default Form