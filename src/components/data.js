import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Config from 'react-native-config';

const Data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Config.endPoint);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <View>
      <Text>Data Component</Text>
      {data && (
        <View>
          {/* Display your data here */}
          <Text>{JSON.stringify(data)}</Text>
        </View>
      )}
    </View>
  );
};

export default Data;