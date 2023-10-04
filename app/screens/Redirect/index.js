import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// changes from local
const RedirectScreens = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#034aff'}]}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.button_text}>Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#d76139'}]}
        onPress={() => navigation.navigate('Store')}>
        <Text style={styles.button_text}>Store Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#000'}]}
        onPress={() => navigation.navigate('Favourites')}>
        <Text style={styles.button_text}>Favourites Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#000'}]}
        onPress={() => navigation.navigate('Dummmy')}>
        <Text style={styles.button_text}>Favourites Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RedirectScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 10,
  },
  button_text: {
    fontSize: 16,
    color: '#fff',
  },
});
