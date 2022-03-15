import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { onFetchProduct } from '@src/actions/product';
import onFetchCategory from '@src/actions/category';
import { Theme } from '@src/common/theme';
import { Router } from '@src/navigation/router';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = () => {
  const { products } = useSelector((state) => state.Product);

  const navigation = useNavigation();
  const temp = useSelector((state) => state.Category);
  const { categories } = temp;
  const dispatch = useDispatch();

  const [selectedCategoryIndex, setSelectedCategoryIndex] =
    React.useState(0);
  useEffect(() => {
    dispatch(onFetchCategory());
    dispatch(onFetchProduct());
  }, [dispatch]);

  const ListCategory = () => {
    //
    console.log(categories);
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
      >
        {categories?.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex === index
                    ? Theme.colors.primaryOg
                    : Theme.colors.secondaryOg,
                ...styles.categoryBtn,
              }}
            >
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{
                    height: 35,
                    width: 25,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex === index
                      ? Theme.colors.white
                      : Theme.colors.primaryOg,
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({ food }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={Theme.colors.white}
        onPress={() => navigation.navigate(Router.DetailScreen, food)}
      >
        <View style={styles.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image
              source={food.image}
              style={{ width: 120, height: 120 }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {food.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: Theme.colors.greyOg,
                marginTop: 2,
              }}
            >
              {food.ingredients}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                ${food.price}
              </Text>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    backgroundColor: Theme.colors.primaryOg,
                    height: 30,
                    width: 30,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon name="add" size={20} color={Theme.colors.white} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={styles.root}>
      {/* header */}
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28 }}>Hello,</Text>
            <Text
              style={{ fontSize: 28, fontWeight: '600', marginLeft: 10 }}
            >
              Tu Tuan
            </Text>
          </View>
          <Text
            style={{
              fontSize: 17,
              marginTop: 5,
              color: Theme.colors.gray,
            }}
          >
            What do you want to day
          </Text>
        </View>
        <Image
          style={{ height: 50, width: 50, borderRadius: 25 }}
          source={require('@src/assets/images/person.png')}
        />
      </View>
      {/* search */}
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Icon name="search" size={28} />
          </TouchableOpacity>
          <TextInput
            // style={{ flex: 1, fontStyle: 18 }}
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
        <TouchableOpacity>
          <View style={styles.sortBtn}>
            <Icon name="tune" size={25} color={Theme.colors.white} />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <ListCategory />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        renderItem={({ item }) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Theme.colors.lightOg,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    backgroundColor: Theme.colors.primaryOg,
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  categoriesListContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: Theme.colors.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    elevation: 13,
    backgroundColor: Theme.colors.white,
    borderRadius: 15,
  },
});
