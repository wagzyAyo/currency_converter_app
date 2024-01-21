import React from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const Privacy = () => {
    return(
        <SafeAreaView >
        <View style={styles.container}>
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
    textwrapper: {
        textAlign: 'center'
    }
})

export default Privacy