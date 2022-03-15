import { Theme } from '@src/common/theme';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const InfoProfile = () => {
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://allimages.sgp1.digitaloceanspaces.com/tipeduvn/2022/01/Top-Anh-Avatar-dep-doc-ngau-lam-hinh-dai-dien-Facebook-Zalo.jpg',
        }}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.avatar}
      />
      <View style={styles.info}>
        <View style={styles.nameAndEdit}>
          <Text style={styles.name}>LE TU TUAN</Text>
          <TouchableOpacity
            color={Theme.colors.primary}
            style={styles.buttonEdit}
            onPress={() => console.log('edit my info')}
          >
            <Icon
              name="ios-pencil-outline"
              size={20}
              color={Theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.email}>tutuanletkpt@gmail.com</Text>
      </View>
    </View>
  );
};

export default InfoProfile;

const styles = StyleSheet.create({
  root: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: Theme.colors.lineBorder,
    borderBottomWidth: 1,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    paddingLeft: 15,
  },
  nameAndEdit: {
    flexDirection: 'row',
  },
  name: {
    paddingRight: 15,
  },
});
