import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: 0,
    title: 'Xiaomi Mi True Wireless Earbuds',
    imgURL:
      'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
    price: '₺134,77',
    inStock: true,
  },
  {
    id: 1,
    title: 'General Mobile GM 20',
    imgURL:
      'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
    price: '₺1.810,21',
    inStock: true,
  },
  {
    id: 2,
    title: 'Philips 58PUS8505/62 The One',
    imgURL:
      'https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg',
    price: '₺6.992,25',
    inStock: false,
  },
  {
    id: 3,
    title: 'LG 49UM7100PLB Ultra HD 4K',
    imgURL:
      'https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg',
    price: '₺4.614,38',
    inStock: true,
  },
  {
    id: 4,
    title: 'Samsung Galaxy M31 SM-M315F',
    imgURL:
      'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg',
    price: '₺2.995,80',
    inStock: true,
  },
  {
    id: 5,
    title: 'Apple AirPods Series 2',
    imgURL:
      'https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg',
    price: '₺1.299,00',
    inStock: true,
  },
  {
    id: 6,
    title: 'Lenovo Tab M10 Plus',
    imgURL:
      'https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg',
    price: '₺2.496,50',
    inStock: false,
  },
  {
    id: 7,
    title: 'Xiaomi Redmi 20000 Mah',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg',
    price: '₺134,70',
    inStock: false,
  },
  {
    id: 8,
    title: 'Xiaomi Mijia Smart Home 360',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg',
    price: '₺269,73',
    inStock: true,
  },
  {
    id: 9,
    title: 'Xiaomi Mi Box S 4K Ultra HD',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg',
    price: '₺478,53',
    inStock: true,
  },
  {
    id: 10,
    title: 'Haylou Solar LS-5 Smartwatch',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg',
    price: '₺296,00',
    inStock: true,
  },
];

const Item = ({item}) => (
  <View style={styles.products}>
    {/* component1 */}
    <View style={styles.product}>
      <View>
        <Image
          style={styles.productImg}
          source={{
            uri: item.imgURL,
          }}
        />
      </View>
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  </View>
);

const App = () => {
  state = {
    dimensions: {
      window,
    },
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}> Patikastore </Text>
      </View>

      <View>
        <TextInput style={styles.searchBar}>Search..</TextInput>
      </View>

      {/* all products */}

      <FlatList
        style={styles.flatlist}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={Item}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  heading: {
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  searchBar: {
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#DFE0DC',
    color: 'gray',
    fontWeight: 'bold',
    borderColor: '#DFE0DC',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  flatlist: {
    width: windowWidth ,
  },
  products: {
    justifyContent: 'space-around',
    padding: 5,
    
  },

  product: {
    backgroundColor: '#E0E2DB',
    paddingTop: 10,
    alignItems: 'center',
    width: windowWidth / 2-10,
    borderRadius: 5,
    paddingVertical: 20,

  },
  productImg: {
    width: 160,
    height: 200,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom:10
  },
});
