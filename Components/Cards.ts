import { StyleSheet } from 'react-native';

export const CardStyle = StyleSheet.create({
  cardCon: {
    // height:100,
    width: 300,
    // backgroundColor:"blue",
    // margin:10
  },
  card: {
    height: 150,
    width: 390,
    backgroundColor: 'gray',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export const FixedCardStyle = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    // backgroundColor: 'red',
    padding: 10,
    flexDirection: 'row',
  },
  cards: {
    height: '100%',
    width: '29%',
    flex: 0,
    backgroundColor: '#967b7bff',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
