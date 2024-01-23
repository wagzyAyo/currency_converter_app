import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet } from 'react-native';



const API_KEY = process.env.KEY

const url = `http://data.fixer.io/api/latest?access_key=${API_KEY}`



const Convert = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false))
    }, [])
    return(
        <View>
            {loading ? (<Text>Loading...</Text>): (<Text> {data.base ? 'Success!' :  'Fail!'}  </Text>)}    
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