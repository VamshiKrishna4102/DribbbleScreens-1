import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const DWidth = Dimensions.get('window').width;
const DHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingVertical: 25,
    flex: 1,
  },
  itemContainer: {
    marginRight: 10,
    width: DWidth * 0.7,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  itemTitle: {
    marginTop: 5,
    fontSize: 12,
  },
  itemDiscount: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  read_more: {
    backgroundColor: '#000',
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 8,
    marginTop: 10,
  },
  read_more_text: {
    color: '#fff',
  },
  BookContainer: {
    width: DWidth * 0.25,
    // backgroundColor: 'red',
    marginHorizontal: 5,
  },
  book_image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  BookTitle: {
    color: '#000',
  },
  highlight: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#fff',
    zIndex: 25,
    paddingHorizontal: 10,
    borderRadius: 25,
    fontSize: 12,
  },
  //   =============
  read_more_flex: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  continue_read_text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  see_more: {},
  see_more_text: {},
  //   ----
  star_book: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
  },
  left: {
    width: '40%',
  },
  right: {
    width: '60%',
    paddingLeft: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  sub_heading: {
    fontSize: 13,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  stars_row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  start_image: {
    width: 20,
    height: 20,
  },
});
export default styles;
