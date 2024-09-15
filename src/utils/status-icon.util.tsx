import {Image, StyleSheet} from 'react-native';
import {Images, Colors, Enums} from '../constants';
import {wp} from './responsive.util';
import React = require('react');

export const getStatusIcon = (status: string) => {
  switch (status) {
    case Enums.STATUS.COMPLETED:
      return (
        <Image
          source={Images.CHECK}
          style={styles.statusImage}
          tintColor={'green'}
        />
      );
    case Enums.STATUS.INCOMPLETE:
      return (
        <Image
          source={Images.CONTINUES}
          style={styles.statusImage}
          tintColor={'orange'}
        />
      );
    case Enums.STATUS.IN_PROGRESS:
      return (
        <Image
          source={Images.WAIT}
          style={styles.statusImage}
          tintColor={Colors.DARKERBLUE}
        />
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  statusImage: {
    width: wp('8%'),
    height: wp('8%'),
    resizeMode: 'contain',
  },
});
