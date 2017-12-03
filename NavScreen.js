import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
} from 'native-base';

const NavScreen = ({ navigation, banner }) => {
  return (
    <SafeAreaView>
      {/* <Text>{banner}</Text> */}
      {/* <Button
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        title="Go to a profile screen"
      />
      <Button
        onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
        title="Go to a photos screen"
      /> */}
      {/* <Button onPress={() => navigation.goBack(null)} title="Go back" />
      <Text /> */}
    </SafeAreaView>
  );
};

export default NavScreen;
