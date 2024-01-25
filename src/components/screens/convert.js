import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const API_KEY = process.env.KEY

const url = `http://data.fixer.io/api/latest?access_key=${API_KEY}`
const currencyList = ['USD', 'EUR', 'GBP', 'JPY']



const Convert = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        convertFrom: '',
        amount: '',
        convertTo: '',
        convertedAmount: '',
      });

    useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false))
    }, [])

    return(
        <View style={styles.container}>
        <Text>Convert Currency</Text>
        <View style={styles.form}>
          <Picker
            selectedValue={formData.convertFrom}
            onValueChange={(value) => setFormData({ ...formData, convertFrom: value })}
          >
            {currencyList.map((currency) => (
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}
          </Picker>
          <TextInput
            placeholder="Amount"
            keyboardType="numeric"
            value={formData.amount}
            onChangeText={(value) => setFormData({ ...formData, amount: value })}
          />
          <Picker
            selectedValue={formData.convertTo}
            onValueChange={(value) => setFormData({ ...formData, convertTo: value })}
          >
            {currencyList.map((currency) => (
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}
          </Picker>
          <TouchableOpacity style={styles.button} onPress={handleConvert}>
            <Text>Convert</Text>
          </TouchableOpacity>
          <Text>Converted Amount: {formData.convertedAmount}</Text>
          <Text>Unit: {unit}</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      width: '80%',
      marginTop: 20,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
    },
  });

export default Convert