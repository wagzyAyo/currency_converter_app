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

    const [unit, setUnit] = useState('');


    const getExchangeRate = async (fromCurrency, toCurrency) => {
        // Simulating API call
        const response = await fetch(url);
        const data = await response.json();
        return data.rates[toCurrency];
      };

    const convert = async () => {
        try {
          const { convertFrom, amount, convertTo } = formData;
          const exchangeRate = await getExchangeRate(convertFrom, convertTo);
          const convertedAmount = (parseFloat(amount) * exchangeRate).toFixed(2);
          setFormData({ ...formData, convertedAmount });
        } catch (error) {
          console.error('Error converting currency:', error);
        }
      };
    
      const unitPer = async () => {
        try {
          const { convertFrom, amount, convertTo, convertedAmount } = formData;
          const exchangeRate = await getExchangeRate(convertFrom, convertTo);
          const unitValue = (1 / exchangeRate).toFixed(4);
          const unitText = `1 ${convertFrom} = ${unitValue} ${convertTo}`;
          setUnit(unitText);
        } catch (error) {
          console.error('Error calculating unit:', error);
        }
      };
    
      const handleConvert = async () => {
        await convert();
        await unitPer();
      };

    return(
        <View style={styles.container}>
        <Text>Convert Currency</Text>
        <View style={styles.form}>
          <View style={styles.layout}>
          <Text >Select</Text>
          <Text >Amount</Text>
          </View>
          <View style={styles.layout}>
          <Picker
            selectedValue={formData.convertFrom}
            style={styles.picker}
            onValueChange={(value) => setFormData({ ...formData, convertFrom: value })}
          >
            {currencyList.map((currency) => (
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}
          </Picker>
          <TextInput
            keyboardType="numeric"
            value={formData.amount}
            style={styles.picker}
            onChangeText={(value) => setFormData({ ...formData, amount: value })}
          />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleConvert}>
            <Text>Convert</Text>
          </TouchableOpacity>
          <View style={styles.layout}>
            <Text>Convert to</Text>
            <Text>Converted Amount</Text>
          </View>
          <View style={styles.layout}>
          <Picker
            selectedValue={formData.convertTo}
            style={styles.picker}
            onValueChange={(value) => setFormData({ ...formData, convertTo: value })}
          >
            {currencyList.map((currency) => (
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}
          </Picker>
            <TextInput 
            selectedValue={formData.convertedAmount}
            placeholder='Converted Amount'
            style={styles.picker}
            />
            </View>
          
        </View>
        <Text style={styles.unit}>Unit: {unit}</Text>
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
      width: '90%',
      marginTop: 20,
      backgroundColor: '#ffffff',
      borderRadius: 20,
    },
    layout: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 30
    },
    picker: {
      height: 50,
      width:120,
      backgroundColor: '#D9D9D9'
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
    },
    unit: {
      marginTop: 20,
      textAlign: 'center'
    }
  });

export default Convert