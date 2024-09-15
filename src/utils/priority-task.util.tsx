/* eslint-disable react-native/no-inline-styles */
import React = require('react');
import {Colors, Enums} from '../constants';
import {Text} from 'react-native';

export const getPriorityText = (priority: string) => {
  switch (priority) {
    case Enums.PRIORITY.HIGH:
      return <Text style={{color: Colors.RED, fontWeight: 'bold'}}>High</Text>;
    case Enums.PRIORITY.LOW:
      return (
        <Text style={{color: Colors.DARKERBLUE, fontWeight: 'bold'}}>Low</Text>
      );
    case Enums.PRIORITY.MEDIUM:
      return (
        <Text style={{color: Colors.ORANGE, fontWeight: 'bold'}}>Medium</Text>
      );
    default:
      return null;
  }
};
