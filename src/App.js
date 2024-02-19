import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Image,
  Heading,
  Card,
  View,
  withAuthenticator
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View>
      <Card>
        <Image src={logo} className="App-logo" alt="logo"/>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator (App);
