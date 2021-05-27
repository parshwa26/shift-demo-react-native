import React from "react";
import { StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

function AcceptedListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <Card
        title="No Accepted Shifts"
        time="When owner/ Manaager accepts the shifts it will appear hear"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default AcceptedListingsScreen;
