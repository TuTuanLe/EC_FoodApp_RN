import { Theme } from '@src/common/theme';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '@src/components/Button';

const CartScreen = ({ navigation }) => {
  const { products } = useSelector((state) => state.Product);
  console.log(products);

  const CartCard = ({ food }) => {
    return (
      <View style={styles.cartCard}>
        <Image source={food?.image} style={{ width: 80, height: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {food?.name}
          </Text>
          <Text style={{ fontSize: 13, color: Theme.colors.gray }}>
            {food?.ingredients}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
            ${food?.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
          <View style={styles.actionBtn}>
            <Icon name="remove" size={25} color={Theme.colors.white} />
            <Icon name="add" size={25} color={Theme.colors.white} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: Theme.colors.white, flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.header}>
          <Icon name="arrow-back-ios" size={28} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={products}
        renderItem={({ item }) => <CartCard food={item} />}
      />

      <View style={{ marginBottom: 82 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Total Price
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$50</Text>
        </View>
        <View style={{ marginHorizontal: 40 }}>
          <Button
            style={{
              backgroundColor: Theme.colors.primaryOg,
              height: 50,
              borderRadius: 25,
              justifyContent: 'center',
              //   width: '80%',
              alignItems: 'center',
              // marginHorizontal: 20,
            }}
            //   onPress={() => navigation.navigate('TabBarBottom')}
            disabled={false}
          >
            <Text
              style={{
                fontSize: 17,
                color: Theme.colors.white,
                fontWeight: '500',
              }}
            >
              CHECK OUT
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    opacity: 1,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    backgroundColor: Theme.colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: Theme.colors.primaryOg,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
