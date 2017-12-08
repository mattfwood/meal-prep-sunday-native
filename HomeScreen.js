import React from 'react';
import { ScrollView, View, Button, StyleSheet, Alert } from 'react-native';
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

// const HomeScreen = ({ navigation, screenProps }) => (
//   <Content>
//     <List
//       dataArray={screenProps.recipes}
//       renderRow={recipe => (
//         <ListItem
//           button
//           onPress={() => navigation.navigate('Recipes', { recipe })}
//           style={{ marginLeft: 0 }}
//         >
//           <Left>
//             <Text>{recipe.name}</Text>
//           </Left>
//           <Right>
//             <Icon name="arrow-forward" />
//           </Right>
//         </ListItem>
//       )}
//     />
//   </Content>
// );

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Recipes',
    headerRight: (
      <Icon button
        name="add"
        onPress={() => navigation.navigate('AddRecipe')}
        style={{ paddingRight: 20 }}
      />
    )
  });

  render() {
    const { navigation, screenProps } = this.props;

    return (
      <Content>
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
              <Icon name="arrow-forward"/>
            </Right>
          </ListItem>
        )}
      />
    </Content>
    )
  }

};  

export default HomeScreen;
