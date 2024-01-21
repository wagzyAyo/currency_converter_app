import React from "react";
import {Text, View, StyleSheet, SafeAreaView, StatusBar, Image} from 'react-native'

const About = () => {
    return(
        <SafeAreaView>
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../assets/unsplash_TamMbr4okv4.png')}/>
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
    img: {
        width:370,
        height:370,
    },
    textwrapper: {
        textAlign: 'center',
        marginTop: 20,
    },
   
})


export default About