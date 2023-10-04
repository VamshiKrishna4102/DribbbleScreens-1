import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';

const HomeScreen = () => {
  const OffersData = [
    {
      id: '1',
      title: 'Get Ramadan Offer 2023',
      discount: '25% on All islamic Book',
      colo: '#d4fffc',
    },
    {
      id: '2',
      title: 'Get Ramadan Offer 2024',
      discount: '35% on All islamic Book',
      colo: '#dde7ff',
    },
    {
      id: '3',
      title: 'Get Bakridh Offer 2023',
      discount: '15% on All islamic Book',
      colo: '#f2f2f2',
    },
  ];
  const BookData = [
    {
      BookId: '11',
      title: 'The wager',
      image: 'https://m.media-amazon.com/images/I/91qXDU9TXvL.jpg',
    },
    {
      BookId: '12',
      title: 'Atomic Habits',
      image:
        'https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg',
    },
    {
      BookId: '13',
      title: 'Dog Man',
      image: 'https://m.media-amazon.com/images/I/71rnh-H-5QL.jpg',
    },
    {
      BookId: '14',
      title: 'Outlive',
      image:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1670258822l/61153739.jpg',
    },
  ];
  const OfferItem = ({title, discount, color}) => (
    <View style={[styles.itemContainer, {backgroundColor: color}]}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemDiscount}>{discount}</Text>
      <TouchableOpacity style={styles.read_more}>
        <Text style={styles.read_more_text}>Read more</Text>
      </TouchableOpacity>
    </View>
  );
  const BookItem = props => (
    <View style={[styles.BookContainer]}>
      <Text style={styles.highlight}>Steam</Text>
      <Image
        source={{uri: props.book_data.image}}
        style={styles.book_image}
        resizeMode="cover"
      />
      <Text style={styles.BookTitle}>{props.book_data.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={{fontFamily:'Ramabhadra-Regular'}}>
        డిజిటల్ విప్లవంతో ప్రపంచ వ్యాప్తంగా వివిధ భాషలలో సమాచార వినిమయం జరుగుతూ ఉంది. మన తెలుగు విషయమే తీసుకుంటే ఇంతకు ముందు ఉన్న ఫాంట్లను ఉపయోగించి సమాచార వినిమయం (మెయిల్స్ పంపడం, సమాచారాన్ని ఓపెన్ ఫైల్స్ గా పంపడం వంటివి) చాలా కష్టసాధ్యమైన పని. తెలుగులో యూనికోడ్ ఫాంట్ల రాకతో ఆ పని చాలా సులభసాధ్యమైంది. యూనికోడ్ ఫాంట్స్ మన తెలుగు ఫాంట్ యూజర్ల కోసం అందుబాటులోకి తెచ్చే ఉద్దేశమే ఈ తెలుగుఫాంట్స్ డాట్ ఇన్. అందరూ దీనిని సద్వినియోగపరుచుకుంటారని ఆశిస్తూ...
        </Text>
        <Text style={{fontFamily:'english'}}>
        Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.
        </Text>
        {/* <ScrollView>
          <FlatList
            data={OffersData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <OfferItem
                title={item.title}
                discount={item.discount}
                color={item.colo}
              />
            )}
          />
          <View style={styles.read_more_flex}>
            <Text style={styles.continue_read_text}>Continue Reading</Text>
            <TouchableOpacity style={styles.see_more}>
              <Text style={styles.see_more_text}>Read more</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={BookData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.BookId}
            renderItem={({item}) => <BookItem book_data={item} />}
          />
          <View style={styles.read_more_flex}>
            <Text style={styles.continue_read_text}>Book of the Day</Text>
            <View />
          </View>
          <View style={styles.star_book}>
            <View style={styles.left}>
              <Image
                source={{
                  uri: 'https://m.media-amazon.com/images/I/815oZwQQqML.jpg',
                }}
                style={styles.book_image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.right}>
              <Text style={styles.heading}>It start with us</Text>
              <Text style={styles.sub_heading}>Colleen Hoover</Text>
              <View style={styles.stars_row}>
                <Image
                  source={require('../../assets/images/star.png')}
                  style={styles.start_image}
                />
                <Image
                  source={require('../../assets/images/star.png')}
                  style={styles.start_image}
                />
                <Image
                  source={require('../../assets/images/star.png')}
                  style={styles.start_image}
                />
                <Image
                  source={require('../../assets/images/star.png')}
                  style={styles.start_image}
                />
              </View>
              <Text style={styles.price}>$40 $60</Text>
            </View>
          </View>
        </ScrollView> */}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
