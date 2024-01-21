import React from "react";
import {Text, View, StyleSheet, SafeAreaView, StatusBar} from 'react-native'

const About = () => {
    return(
        <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.textwrapper}>We believe that financial transactions should
            be as borderless as the modern world we live 
            in. Whether you're a frequent traveler</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 0,
        marginTop: StatusBar.currentHeight || 0,
        padding: 20,
    },
    textwrapper: {
        textAlign: 'center'
    }
})


export default About