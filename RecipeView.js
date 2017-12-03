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

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

const RecipeView = ({ navigation }) => {
  const { recipe } = navigation.state.params;

  const sortedIngredients = {};
  recipe.ingredients.forEach((ingredient) => {
    if (sortedIngredients[ingredient.aisle] === undefined) {
      sortedIngredients[ingredient.aisle] = [ingredient];
    } else {
      sortedIngredients[ingredient.aisle].push(ingredient);
    }
  });

  return (
    <Content>
      <View>
        <H1 style={styles.heading}>{recipe.name}</H1>
      </View>
      <List>
        {Object.keys(sortedIngredients).map((key, index) => (
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
          ))}
      </List>
    </Content>
  );
};

export default RecipeView;
