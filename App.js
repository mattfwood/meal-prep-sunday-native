import React from 'react';
import { ScrollView } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
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
  Button,
  View,
} from 'native-base';
import base from './base';
import GroceryListIndex from './GroceryListIndex';
import GroceryListShow from './GroceryListShow';

import NavScreen from './NavScreen';
import HomeScreen from './HomeScreen';
import AddRecipeForm from './AddRecipeForm';

const MyPhotosScreen = ({ navigation }) => (
  <NavScreen banner={`${navigation.state.params.name}'s Photos`} navigation={navigation} />
);

MyPhotosScreen.navigationOptions = {
  title: 'Photos',
};

import RecipeView from './RecipeView';

// AddRecipeForm.navigationOptions = (props) => {
//   const { navigation } = props;
//   const { state, setParams } = navigation;
//   const { params } = state;
//   return {
//     headerTitle: `Person's Profile!`,
//     // Render a button on the right side of the header.
//     // When pressed switches the screen to edit mode.
//     headerRight: (
//       <Button
//         title={params.mode === 'edit' ? 'Done' : 'Edit'}
//         onPress={() => setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
//       />
//     ),
//   };
// };

const RecipeNavigator = StackNavigator({
  Home: {
    path: 'recipes/:mode',
    screen: HomeScreen,
  },

  AddRecipe: {
    path: 'people/:name',
    screen: AddRecipeForm,
  },

  Photos: {
    path: 'photos/:name',
    screen: MyPhotosScreen,
  },

  Recipes: {
    path: 'recipes/:id',
    screen: RecipeView,
  },
});

RecipeNavigator.navigationOptions = (props) => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: 'Home',
    headerRight: (
      <Icon
        style={{ marginRight: 20 }}
        name="add"
        onPress={() =>
          setParams({ mode: params.mode === 'edit' ? 'view' : 'edit' })}
      />
    ),
  };
};

const GroceryListNavigator = StackNavigator({
  Home: {
    screen: GroceryListIndex,
  },

  GroceryListShow: {
    path: 'lists/:id',
    screen: GroceryListShow,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      groceryLists: [],
      tab: 'Home',
      mode: 'view',
    };
  }

  componentWillMount() {
    this.ref = base.syncState('ciPqmj1k1oepwseUMpZoy86pYEu1/recipes', {
      context: this,
      state: 'recipes',
      asArray: true,
    });

    this.ref = base.syncState('ciPqmj1k1oepwseUMpZoy86pYEu1/groceryLists', {
      context: this,
      state: 'groceryLists',
      asArray: true,
    });
  }

  toggleMode() {
    console.log(this.state.mode);
    const newMode = 'view' ? 'edit' : 'view';
    this.setState({ mode: newMode });
  }

  render() {
    const { tab } = this.state;
    if (tab === 'Home') {
      return (
        <Container>
          <RecipeNavigator
            ref={(nav) => {
              this.navigator = nav;
              this.recipes = this.state.recipes;
            }}
            screenProps={this.state}
          />
          <Footer>
            <FooterTab>
              <Button vertical active>
                <Icon name="list" />
                <Text>Recipes</Text>
              </Button>
              <Button vertical onPress={() => this.setState({ tab: 'GroceryLists' })}>
                <Icon name="cart" />
                <Text>Grocery Lists</Text>
              </Button>
              <Button vertical>
                <Icon name="settings" />
                <Text>Settings</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }

    if (tab === 'GroceryLists') {
      return (
        <Container>
          <GroceryListNavigator
            ref={(nav) => {
              this.navigator = nav;
              this.groceryLists = this.state.groceryLists;
            }}
            screenProps={this.state}
          />
          <Footer>
            <FooterTab>
              <Button vertical onPress={() => this.setState({ tab: 'Home' })}>
                <Icon name="list" />
                <Text>Recipes</Text>
              </Button>
              <Button vertical active onPress={() => this.setState({ tab: 'GroceryLists' })}>
                <Icon name="cart" />
                <Text>Grocery Lists</Text>
              </Button>
              <Button vertical>
                <Icon name="settings" />
                <Text>Settings</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
    return null;
  }
}

export default App;
