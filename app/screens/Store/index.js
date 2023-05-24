import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const StoreScreen = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = index => {
    setActiveTab(index);
  };
  const PopularBooksData = [
    {
      id: 1,
      name: 'Fiction',
      image:
        'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg',
      randomNumber: 567,
    },
    {
      id: 2,
      name: 'Mystery',
      image:
        'https://www.shutterstock.com/image-vector/stack-books-theme-image-1-600w-1146044810.jpg',
      randomNumber: 312,
    },
    {
      id: 3,
      name: 'Romance',
      image:
        'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/reading-book-1296x728-header.jpg',
      randomNumber: 876,
    },
    {
      id: 4,
      name: 'Science Fiction',
      image:
        'https://imageio.forbes.com/specials-images/imageserve/63986034dfa1b6bcd37ab5e1/0x0.jpg',
      randomNumber: 153,
    },
    {
      id: 5,
      name: 'Biography',
      image:
        'https://www.shutterstock.com/image-vector/stack-books-theme-image-1-600w-1146044810.jpg',
      randomNumber: 423,
    },
    {
      id: 6,
      name: 'Self-Help',
      image:
        'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg',
      randomNumber: 786,
    },
    {
      id: 7,
      name: 'History',
      image:
        'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/reading-book-1296x728-header.jpg',
      randomNumber: 645,
    },
    {
      id: 8,
      name: 'Fantasy',
      image:
        'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/reading-book-1296x728-header.jpg',
      randomNumber: 289,
    },
    {
      id: 9,
      name: 'Thriller',
      image:
        'https://imageio.forbes.com/specials-images/imageserve/63986034dfa1b6bcd37ab5e1/0x0.jpg',
      randomNumber: 943,
    },
    {
      id: 10,
      name: 'Cooking',
      image:
        'https://www.shutterstock.com/image-vector/stack-books-theme-image-1-600w-1146044810.jpg',
      randomNumber: 567,
    },
  ];
  const ListCard = props => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Image style={styles.avatar} source={{uri: props.TheData.image}} />
        <Text style={styles.name}>{props.TheData.name}</Text>
      </View>
      <Text style={styles.date}>{props.TheData.randomNumber}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.header_text}>Store</Text>
      </View>
      <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 0 && styles.activeTab]}
          onPress={() => handleTabPress(0)}>
          <Text
            style={[styles.tabTitle, activeTab === 0 && styles.activeTabTitle]}>
            Popular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 1 && styles.activeTab]}
          onPress={() => handleTabPress(1)}>
          <Text
            style={[styles.tabTitle, activeTab === 1 && styles.activeTabTitle]}>
            Category
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 2 && styles.activeTab]}
          onPress={() => handleTabPress(2)}>
          <Text
            style={[styles.tabTitle, activeTab === 2 && styles.activeTabTitle]}>
            Free Books
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 3 && styles.activeTab]}
          onPress={() => handleTabPress(3)}>
          <Text
            style={[styles.tabTitle, activeTab === 3 && styles.activeTabTitle]}>
            Best Seller
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 4 && styles.activeTab]}
          onPress={() => handleTabPress(4)}>
          <Text
            style={[styles.tabTitle, activeTab === 4 && styles.activeTabTitle]}>
            New Writers
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View>
        {activeTab === 0 ? (
          <View>
            <FlatList
              contentContainerStyle={{
                backgroundColor: '#f1f6ff',
                height: '100%',
                paddingTop: 60,
              }}
              data={PopularBooksData}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <ListCard TheData={item} />}
            />
          </View>
        ) : (
          <View style={styles.no_data}>
            <Text style={styles.no_data_text}></Text>
            <Text style={styles.no_data_text}>No data Found!</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StoreScreen;
