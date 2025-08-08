import React, { useEffect, useState } from 'react';

import { View, Text } from 'react-native';
import { CardStyle } from './Cards';

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

const Cards = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await fetchData.json();
    console.log(data);
    return data;
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getData();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <View>
      {users.length > 0 && (
        <View style={CardStyle.cardCon}>
          {users.map((user: User) => (
            <View key={user.name} style={CardStyle.card}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  padding: 10,
                  textAlign: 'center',
                }}
              >
                {user.name}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                }}
              >
                {user.email}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                }}
              >
                {user.website}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                }}
              >
                {user.company.name}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Cards;
