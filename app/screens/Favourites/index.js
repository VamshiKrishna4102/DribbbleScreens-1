import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
const FevoritesScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Favourites</Text>
        </View>
        <View style={styles.body_container}>
          <Image
            source={require('../../assets/images/no_books.png')}
            style={styles.image}
          />
          <Text style={styles.heding}>No Book Found!</Text>
          <Text style={styles.body}>Search for popular books</Text>
          <TouchableOpacity style={styles.browse_more}>
            <Text style={styles.browse_more_text}>Browse Books</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FevoritesScreen;
