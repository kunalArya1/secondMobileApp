import React from 'react';
import { View, Text } from 'react-native';
import { FixedCardStyle } from './Cards.ts';

const FixedCard = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: '#ffffff',
          paddingHorizontal: 14,
          paddingVertical: 5,
        }}
      >
        Top Places
      </Text>
      <View style={FixedCardStyle.container}>
        <View
          style={[
            FixedCardStyle.cards,
            {
              backgroundColor: '#676464ff',
            },
          ]}
        >
          <Text>Card 1</Text>
        </View>
        <View
          style={[
            FixedCardStyle.cards,
            {
              backgroundColor: '#49acb5ff',
            },
          ]}
        >
          <Text>Card 2</Text>
        </View>
        <View
          style={[
            FixedCardStyle.cards,
            {
              backgroundColor: '#5984ceff',
            },
          ]}
        >
          <Text>Card 3</Text>
        </View>
      </View>
    </View>
  );
};

export default FixedCard;
