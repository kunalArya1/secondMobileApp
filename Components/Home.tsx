import React, { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Cards from './Cards.tsx';

const Home = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'left',
            fontWeight: 'bold',
            color: '#ffffff',
            padding: 10,
          }}
        >
          User Detials
        </Text>
      </View>
      <Cards />
    </ScrollView>
  );
};

export default Home;
