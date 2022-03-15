import { Theme } from '@src/common/theme';
import Button from '@src/components/Button';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import { Router } from '@src/navigation/router';

const OnBoardScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme.colors.white,
      }}
    >
      <View style={{ height: 400 }}>
        <Image
          style={{ width: '100%', resizeMode: 'contain', top: -150 }}
          source={require('@src/assets/images/onboardImage.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Delicius Food
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: Theme.colors.gray,
              marginTop: 20,
            }}
          >
            We help to find best and delicius food
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator}></View>
          <View style={styles.indicator}></View>
          <View style={styles.indicator}></View>
        </View>
        <Button
          style={{
            backgroundColor: Theme.colors.primaryOg,
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('TabBarBottom')}
          disabled={false}
        >
          <Text style={styles.text}>Get Started</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 30,
    backgroundColor: Theme.colors.primaryOg,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: Theme.colors.gray,
    marginHorizontal: 5,
  },
  text: {
    color: Theme.colors.white,
    fontSize: 17,
    fontWeight: '500',
  },
});
