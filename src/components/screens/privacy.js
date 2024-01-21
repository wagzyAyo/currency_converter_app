import React from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Image} from 'react-native';

const Privacy = () => {
    return(
        <SafeAreaView >
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../assets/unsplash_ah-HeguOe9k.png')}/>
            <Text style={styles.textwrapper}>This Privacy Policy is designed to help you understand
            how we collect, use, disclose, and safeguard your personal 
            information.</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginTop: StatusBar.currentHeight || 0,
        padding: 20,
    },
    img:{
        width:370,
        height:370,
    },
    textwrapper: {
        textAlign: 'center',
        marginTop: 20,
    },
   
})

export default Privacy