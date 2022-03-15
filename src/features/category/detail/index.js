import { Theme } from '@src/common/theme';
import Button from '@src/components/Button';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailScreen = ({ navigation, route }) => {
  const item = route.params;
  console.log(item);
  return (
    <SafeAreaView style={{ backgroundColor: Theme.colors.white, flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.header}>
          <Icon name="arrow-back-ios" size={28} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
        </View>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 280,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={item.image} style={{ width: 220, height: 220 }} />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: Theme.colors.white,
              }}
            >
              {item.name}
            </Text>

            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Icon
                  name="favorite-border"
                  size={25}
                  color={Theme.colors.primaryOg}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.detailsText}>
            An authentic 1920s tavern featuring beer, wine, and craft
            cocktails. Big Al's Tavern is open before and after concerts in
            the theatre.An authentic 1920s tavern featuring beer, wine, and
            craft cocktails.
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <Button
              style={{
                backgroundColor: Theme.colors.white,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('TabBarBottom')}
              disabled={false}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: Theme.colors.primaryOg,
                  fontWeight: '500',
                }}
              >
                Add To Card
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    opacity: 1,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: Theme.colors.primaryOg,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: Theme.colors.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: Theme.colors.white,
  },
});
