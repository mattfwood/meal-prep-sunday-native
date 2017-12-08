import React from 'react';
import { ScrollView, View, StyleSheet, Alert } from 'react-native';
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
  Form,
  Input,
  Item,
  Button,
} from 'native-base';
import NavScreen from './NavScreen';

class AddRecipeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Recipes',
    headerRight: (
      <Text
        style={{ paddingRight: 20 }}
      >
        Save
      </Text>
    )
  });

  state = {
    recipeName: '',
    newIngredient: '',
    ingredients: [],
  }

  addIngredient() {
    if (this.state.newIngredient.value !== '') {
      const ingredients = this.state.ingredients;
      
      ingredients.push(this.state.newIngredient);
  
      this.setState({ ingredients });
  
      this.setState({ newIngredient: '' });
    }
  }

  render() {
    return (
      <Content>
        <Form style={{ padding: 20 }}>
          <Item>
            <Input placeholder="Recipe Name"
              onChangeText={(recipeName) => this.setState({ recipeName })}
            />
          </Item>
          <Item last>
            <Input placeholder="Ingredients"
              onChangeText={(newIngredient) => this.setState({ newIngredient })}
            />
          </Item>
          <Button block style={{ marginTop: 20 }} onPress={() => this.addIngredient()}>
            <Text>Add</Text>
          </Button>
        </Form>
        <List dataArray={this.state.ingredients}
            renderRow={(ingredient) =>
              <ListItem style={{ marginLeft: 0, paddingLeft: 15 }}>
                <Text>{ingredient}</Text>
              </ListItem>
            }>
          </List>
      </Content>
    );
  }
}

export default AddRecipeForm;
