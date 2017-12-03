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

const RecipeView = ({ navigation }) => {
  const { recipe } = navigation.state.params;
  return (
    <Content>
      <View>
        <H1>{recipe.name}</H1>
      </View>
      <List
        dataArray={recipe.ingredients}
        renderRow={ingredient => (
          <ListItem style={{ marginLeft: 0 }}>
            <Left>
              <Text>{ingredient.ingredientName}</Text>
            </Left>
          </ListItem>
        )}
      />
    </Content>
  );
};

export default RecipeView;
