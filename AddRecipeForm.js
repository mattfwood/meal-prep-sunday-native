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
        name="add"
        onPress={() => navigation.navigate('AddRecipe')}
        style={{ paddingRight: 20 }}
      >
        Save
      </Text>
    )
  });

  render() {
    return (
      <Content style={{ padding: 20 }}>
        <Form>
          <Item>
            <Input placeholder="Recipe Name" />
          </Item>
          <Item last>
            <Input placeholder="Ingredients" />
          </Item>
          <Button block style={{ marginTop: 20 }}>
            <Text>Add</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

// const AddRecipeForm = ({ navigation }) => (
//   <Content style={{ padding: 20 }}>
//     <NavScreen banner="banner" navigation={navigation} />
//     <Form>
//       <Item>
//         <Input placeholder="Username" />
//       </Item>
//       <Item last>
//         <Input placeholder="Password" />
//       </Item>
//       <Button block style={{ marginTop: 20 }}>
//         <Text>Primary</Text>
//       </Button>
//     </Form>
//   </Content>
// );

export default AddRecipeForm;
