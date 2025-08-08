import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const BlogCard = () => {
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
        Blog Card
      </Text>
      <View
        style={{
          height: 280,
          width: '91%',
          backgroundColor: '#1bcac1ff',
          padding: 10,
          margin: 20,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            height: 150,
            backgroundColor: '#989393ff',
            borderRadius: 10,
            margin: 2,
          }}
        ></View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            paddingHorizontal: 5,
          }}
        >
          Learn React Native Easily
        </Text>
        <Text
          style={{
            fontSize: 17,
            paddingHorizontal: 5,
          }}
        >
          Kunal Arya
        </Text>
        <Text
          style={{
            fontSize: 13,
            paddingHorizontal: 5,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
          vero! Lorem ipsum dolor sit amet.
        </Text>

        {/* <TouchableOpacity>
          <Text>Follow</Text>
        </TouchableOpacity> */}

        <View>
          <TouchableOpacity>See More</TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;
