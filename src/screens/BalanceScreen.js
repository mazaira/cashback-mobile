import React, {useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context, Provider } from '../context/TransactionContext';
import jsonServer from '../api/jsonServer';

const BalanceScreen = ({ navigation }) => {
  const { state, getTransactions } = useContext(Context);

  useEffect(() => {
    getTransactions();

    // const listener = navigation.addListener('focus', () => {getTransactions();})
    // return () => {
    //   listener.remove();
    // };
  }, []);

  return (
    <View style={styles.mainBlock}>
      <Text style={styles.title}>balances </Text>
      <FlatList
        style={styles.list}
        data={state}
        keyExtractor={(transaction) => transaction.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}> {item.subject} </Text>
                <Text style={styles.title}> {item.amount} </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    borderWidth: 2,
    borderColor: 'black',
    height: 300
  },
  mainBlock: {
    borderWidth: 5,
    borderColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default BalanceScreen;
