import React from 'react';
import { ScrollView } from 'react-native';
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
  Button,
  View,
} from 'native-base';
import base from './base';

import NavScreen from './NavScreen';

const HomeScreen = ({ navigation, screenProps }) => (
  <Content>
    <NavScreen banner="Home Screen" navigation={navigation} />
    <List
      dataArray={screenProps.recipes}
      renderRow={recipe => (
        <ListItem
          button
          onPress={() => navigation.navigate('Recipes', { recipe })}
          style={{ marginLeft: 0 }}
        >
          <Left>
            <Text>{recipe.name}</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      )}
    />
  </Content>
);

HomeScreen.navigationOptions = {
  title: 'Home',
};

const MyPhotosScreen = ({ navigation }) => (
  <NavScreen banner={`${navigation.state.params.name}'s Photos`} navigation={navigation} />
);

MyPhotosScreen.navigationOptions = {
  title: 'Photos',
};

const MyProfileScreen = ({ navigation }) => (
  <NavScreen
    banner={`${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''}${
      navigation.state.params.name
    }'s Profile`}
    navigation={navigation}
  />
);

import RecipeView from './RecipeView';

MyProfileScreen.navigationOptions = (props) => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `${params.name}'s Profile!`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerRight: (
      <Button
        title={params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() => setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
      />
    ),
  };
};

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentWillMount() {
    this.ref = base.syncState('ciPqmj1k1oepwseUMpZoy86pYEu1/recipes', {
      context: this,
      state: 'recipes',
      asArray: true,
    });
  }

  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator &&
      this.navigator.dispatch(NavigationActions.navigate({ routeName: someRouteName }));
  }

  render() {
    return (
      <Container>
        <AppNavigator
          ref={(nav) => {
            this.navigator = nav;
            this.recipes = this.state.recipes;
          }}
          screenProps={this.state}
        />
      </Container>
    );
  }
}

export default App;
