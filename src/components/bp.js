import React from "react";
import { Image, Text, View, StyleSheet, SafeAreaView, StatusBar} from "react-native";

const Bp = ({ImageSource, text}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image style={styles.img} source={ImageSource}/>
                <Text style={styles.textwrapper}>{text}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        paddingTop: StatusBar.currentHeight || 0,
        padding: 20,
    },
    img: {
        width: 370,
        height: 370,
    },
    textwrapper: {
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Bp;