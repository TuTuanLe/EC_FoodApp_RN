import { showToast } from '@src/common/layout/show-toast';
import { Theme } from '@src/common/theme';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const InfoCard = ({ nameIcon, name, ...props }) => {
  return (
    <TouchableOpacity
      style={{ elevation: 0 }}
      onPress={() => {
        showToast({ message: name, type: 'info', title: name });
      }}
    >
      <View style={styles.root}>
        <Icon size={30} name={nameIcon} color={Theme.colors.notBlack} />
        <Text style={styles.nameIcon}>{name}</Text>
        <Icon
          name="chevron-forward"
          size={20}
          color={Theme.colors.notBlack}
        />
      </View>
    </TouchableOpacity>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: Theme.colors.lineBorder,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  nameIcon: {
    flex: 1,
    marginLeft: 20,
    fontFamily: 'gilroy-medium',
    fontSize: 17,
    color: Theme.colors.notBlack,
  },
});
