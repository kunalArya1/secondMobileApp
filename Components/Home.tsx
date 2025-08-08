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
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#ffffff',
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
