import { Theme } from '@src/common/theme';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import ButtonLogOut from '../../components/button-logout';
import InfoCard from '../../components/info-card';
import InfoProfile from '../../components/info-profile';

const Profile = () => {
  const arrInfoCard = [
    { nameIcon: 'basket-outline', name: 'Orders' },
    { nameIcon: 'newspaper-outline', name: 'My Details' },
    { nameIcon: 'ios-location-outline', name: 'Delivery Address' },
    { nameIcon: 'ios-card-outline', name: 'Payment Methods' },
    { nameIcon: 'ios-barcode-outline', name: 'Promo Card' },
    { nameIcon: 'notifications-outline', name: 'Notifications' },
    { nameIcon: 'ios-help-circle-outline', name: 'Help' },
    { nameIcon: 'ios-alert-circle-outline', name: 'About' },
  ];

  return (
    <View style={styles.root}>
      <FlatList
        data={arrInfoCard}
        renderItem={({ item }) => {
          return <InfoCard nameIcon={item.nameIcon} name={item.name} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={InfoProfile}
        ListFooterComponent={ButtonLogOut}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.backgrounds.white,
    height: '100%',
    paddingBottom: '15%',
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
  },
});
