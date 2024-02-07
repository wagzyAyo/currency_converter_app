import React, {useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { currencyList } from '../currencies'

const API_KEY = process.env.KEY

const url = `http://data.fixer.io/api/latest?access_key=${API_KEY}`



const Convert = () => {
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
          const { convertFrom, convertTo } = formData;
          const exchangeRate = await getExchangeRate(convertFrom, convertTo);
          const unitValue = exchangeRate.toFixed(2);
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
        <Text style={styles.bigFont}>Convert Currency</Text>
        <Text style={styles.smallFont}>Check live rate</Text>
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
            {currencyList.map((currency, index) => (
              <Picker.Item key={index} label={currency} value={currency} />
            ))}
          </Picker>
          <TextInput
            keyboardType="numeric"
            value={formData.amount}
            style={[styles.picker, styles.text]}
            onChangeText={(value) => setFormData({ ...formData, amount: value })}
          />
          </View>
          <View style={styles.horizontalLine}></View>
          <TouchableOpacity style={styles.button} onPress={handleConvert}>
            <Image source={require("../../../assets/exchange icon.png")} style={styles.img} />
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
            {currencyList.map((currency, index) => (
              <Picker.Item key={index} label={currency} value={currency} />
            ))}
          </Picker>
            <TextInput 
            value={formData.convertedAmount}
            placeholder='0.00'
            style={[styles.picker, styles.text]}
            editable={false}
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
    bigFont: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    smallFont: {
      color: '#A9A7A7',
      fontSize: 16,
    },
    picker: {
      height: 50,
      width:120,
      backgroundColor: '#D9D9D9'
    },
    button: {
      backgroundColor: '#0840AC',
      width:36,
      height:36,
      padding: 10,
      alignItems: 'center',
      borderRadius: 50,
      margin: "auto",
      marginTop: -16,
      display: 'flex',
      alignSelf: 'center'
    },
    unit: {
      marginTop: 20,
      textAlign: 'center'
    },
    text: {
      padding:10,
    },
    img: {
      width:15,
      height:17
    },
    horizontalLine: {
      height: 1,
      backgroundColor: "black",
    }
  });

export default Convert