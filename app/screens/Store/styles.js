import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
const DWidth = Dimensions.get('window').width;
const DHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
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
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'absolute',
    top: Platform.OS === 'android' ? 60 : 110,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  activeTab: {
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#034aff',
  },
  activeTabTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#034aff',
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    width: DWidth * 0.85,
    alignSelf: 'center',
    // marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  no_data: {
    height: DHeight * 0.8,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  no_data_text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
