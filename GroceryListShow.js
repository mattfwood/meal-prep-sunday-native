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
  H1,
} from 'native-base';

const GroceryListShow = ({ navigation, screenProps }) => {
  const { groceryList } = navigation.state.params;

  const sortedIngredients = {};
  groceryList.forEach((ingredient) => {
    if (sortedIngredients[ingredient.aisle] === undefined) {
      sortedIngredients[ingredient.aisle] = [ingredient];
    } else {
      sortedIngredients[ingredient.aisle].push(ingredient);
    }
  });

  return (
    <Content>
      <List>
        {Object.keys(sortedIngredients).map((key, index) => {
          return (
            <View key={index}>
              <ListItem itemHeader first>
                <Text style={{ fontWeight: 'bold' }}>{key.toUpperCase().replace(';', ' / ')}</Text>
              </ListItem>
              {sortedIngredients[key].map((ingredient, index) => (
                <ListItem key={`${key}-${index}`} style={{ marginLeft: 0, paddingLeft: 15 }}>
                  <Text>{ingredient.ingredientName}</Text>
                </ListItem>
              ))}
            </View>
          );
        })}
      </List>
    </Content>
  );
};

export default GroceryListShow;
