import React from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
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
  H1,
} from 'native-base';

const GroceryListIndex = ({ navigation, screenProps }) => {
  return (
    <Content>
      <List
        dataArray={screenProps.groceryLists}
        renderRow={(groceryList, index) => (
          <ListItem
            button
            style={{ marginLeft: 0 }}
            onPress={() => navigation.navigate('GroceryListShow', { groceryList })}
          >
            <Left>
              <Text>Grocery List {index}</Text>
            </Left>
          </ListItem>
        )}
      />
    </Content>
  );
};

export default GroceryListIndex;
