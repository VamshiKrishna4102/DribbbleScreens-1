import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const DWidth = Dimensions.get('window').width;
const DHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#034aff',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  body_container: {
    alignItems: 'center',
  },
  image: {
    width: DWidth * 0.7,
    height: DWidth * 0.7,
  },
  heding: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 10,
  },
  browse_more: {
    width: DWidth * 0.7,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#d76139',
    borderRadius: 15,
    marginTop: 10,
  },
  browse_more_text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default styles;
